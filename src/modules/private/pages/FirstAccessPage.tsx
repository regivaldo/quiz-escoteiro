import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUserStore } from '@/stores/userStore';
import { db } from '@/config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const FirstAccessPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState<{ sigla: string; nome: string }[]>([]);
  const [cities, setCities] = useState<{ id: number; nome: string }[]>([]);

  const [formData, setFormData] = useState({
    group: '',
    numeral: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
        const data = await response.json();
        const sortedStates = data.sort((a: { nome: string }, b: { nome: string }) => a.nome.localeCompare(b.nome));
        setStates(sortedStates);
      } catch (error) {
        console.error('Erro ao buscar estados:', error);
        toast.error('Erro ao carregar lista de estados.');
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) {
        setCities([]);
        return;
      }

      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${formData.state}/municipios`,
        );
        const data = await response.json();
        const sortedCities = data.sort((a: { nome: string }, b: { nome: string }) => a.nome.localeCompare(b.nome));
        setCities(sortedCities);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
        toast.error('Erro ao carregar lista de cidades.');
      }
    };

    fetchCities();
  }, [formData.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updates: typeof prev = { ...prev, [name]: value };
      if (name === 'state') {
        updates.city = ''; // Reset city when state changes
      }
      return updates;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error('Usuário não autenticado.');
      return;
    }

    if (!formData.group || !formData.numeral || !formData.city || !formData.state) {
      toast.warning('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);

    try {
      const userRef = doc(db, 'users', user.id);
      const updateData = {
        group: formData.group,
        numeral: formData.numeral,
        city: formData.city,
        state: formData.state,
      };

      await setDoc(userRef, updateData, { merge: true });

      setUser({
        ...user,
        ...updateData,
      });

      toast.success('Cadastro realizado com sucesso!');
      navigate('/game');
    } catch (error) {
      console.error('Erro ao salvar cadastro:', error);
      toast.error('Erro ao salvar informações. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <section className="max-w-xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3 pt-4">
          <h1 className="text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">Primeiro Acesso</h1>
          <p className="text-subtext-light text-base font-normal leading-normal">
            Para continuar, precisamos que você complete seu cadastro com as informações abaixo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-text-dark text-base font-medium leading-normal pb-2">Grupo Escoteiro</span>
            <input
              type="text"
              name="group"
              value={formData.group}
              onChange={handleChange}
              placeholder="Ex: Grupo Escoteiro Marechal Rondon"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal placeholder:text-text-muted"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-text-dark text-base font-medium leading-normal pb-2">Numeral</span>
            <input
              type="text"
              name="numeral"
              value={formData.numeral}
              onChange={handleChange}
              placeholder="Ex: 41"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal placeholder:text-text-muted"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-text-dark text-base font-medium leading-normal pb-2">Estado</span>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal placeholder:text-text-muted disabled:bg-gray-100 disabled:text-gray-400"
              >
                <option value="" disabled>
                  Selecione um estado
                </option>
                {states.map((uf) => (
                  <option key={uf.sigla} value={uf.sigla}>
                    {uf.nome}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-text-dark text-base font-medium leading-normal pb-2">Cidade</span>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                disabled={!formData.state || cities.length === 0}
                className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-dark focus:outline-0 focus:ring-0 border border-border bg-background focus:border-primary h-14 p-[15px] text-base font-normal leading-normal placeholder:text-text-muted disabled:bg-gray-100 disabled:text-gray-400"
              >
                <option value="" disabled>
                  {!formData.state ? 'Selecione um estado primeiro' : 'Selecione uma cidade'}
                </option>
                {cities.map((city) => (
                  <option key={city.id} value={city.nome}>
                    {city.nome}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? 'Salvando...' : 'Salvar Cadastro'}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default FirstAccessPage;
