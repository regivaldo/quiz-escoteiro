import { UserIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query, limit, where } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { useUserStore } from '@/stores/userStore';
import type { UserType } from '@/types/user';

type RankingEntry = {
  id: string;
  name: string;
  group: string;
  score: number;
};

type RankingPeriod = 'Diário' | 'Semanal' | 'Geral' | 'Meu grupo';

const RankingPage = () => {
  const { user } = useUserStore();
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<RankingPeriod>('Geral');
  const [userPosition, setUserPosition] = useState<{ rank: number; score: number } | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      setIsLoading(true);
      try {
        const usersRef = collection(db, 'users');
        let q;

        if (selectedPeriod === 'Meu grupo' && user?.group) {
          // Filtra por grupo do usuário logado
          q = query(usersRef, where('group', '==', user.group), orderBy('totalPoints', 'desc'), limit(50));
        } else {
          // Ranking geral - por enquanto Diário e Semanal também mostram Geral
          // TODO: Implementar filtro por período quando houver dados de data
          q = query(usersRef, orderBy('totalPoints', 'desc'), limit(50));
        }

        const querySnapshot = await getDocs(q);

        const rankingData: RankingEntry[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as UserType;
          return {
            id: doc.id,
            name: data.name || 'Usuário',
            group: data.group || '-',
            score: data.totalPoints || 0,
          };
        });

        setRankings(rankingData);

        // Encontrar posição do usuário logado
        if (user) {
          const userIndex = rankingData.findIndex((entry) => entry.id === user.id);
          if (userIndex !== -1) {
            setUserPosition({
              rank: userIndex + 1,
              score: rankingData[userIndex].score,
            });
          } else {
            // Usuário não está no top 50, buscar posição real
            // Por simplicidade, mostramos apenas os pontos do usuário
            setUserPosition({
              rank: 0, // 0 significa "fora do top 50"
              score: user.totalPoints || 0,
            });
          }
        }
      } catch (error) {
        console.error('Erro ao buscar ranking:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, [selectedPeriod, user]);

  const getIconPosition = (position: number) => {
    if (position === 1) {
      return '🥇';
    }
    if (position === 2) {
      return '🥈';
    }
    if (position === 3) {
      return '🥉';
    }
    return '';
  };

  const getRowClasses = (position?: number) => {
    if (position === 1) {
      return 'border-b border-border bg-[#9EB83B]/20 font-bold text-text';
    }
    if (position === 2) {
      return 'border-b border-border bg-[#47A8A5]/20 font-semibold text-text';
    }
    if (position === 3) {
      return 'border-b border-border bg-[#47A8A5]/10 font-semibold text-text';
    }
    return 'border-b border-border hover:bg-surface-subtle transition-colors';
  };

  const handlePeriodChange = (period: RankingPeriod) => {
    setSelectedPeriod(period);
  };

  const periods: RankingPeriod[] = ['Diário', 'Semanal', 'Geral', 'Meu grupo'];

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Page Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-black tracking-tighter sm:text-4xl text-text">Ranking do Quiz</p>
            <p className="text-text-muted text-base font-normal">Veja os melhores jogadores e sua posição</p>
          </div>
        </div>

        {/* Period Filter Tabs */}
        <div>
          <div className="flex h-12 w-full max-w-xl items-center justify-center rounded-lg bg-surface-subtle p-1">
            {periods.map((period) => (
              <label
                key={period}
                className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors"
              >
                <span className="truncate">{period}</span>
                <input
                  className="sr-only"
                  name="ranking-period"
                  type="radio"
                  value={period}
                  checked={selectedPeriod === period}
                  onChange={() => handlePeriodChange(period)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Ranking Table */}
        <div>
          <div className="flex overflow-hidden rounded-xl border border-border bg-surface">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-surface-subtle/50">
                  <th className="px-6 py-4 text-left w-24 text-sm font-semibold tracking-wider text-text">Posição</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text">Jogador</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider text-text">
                    Grupo Escoteiro
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold tracking-wider text-text">Pontuação</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-text-muted">
                      <div className="flex justify-center items-center gap-2">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        Carregando ranking...
                      </div>
                    </td>
                  </tr>
                ) : rankings.length > 0 ? (
                  rankings.map((player, index) => (
                    <tr
                      key={player.id}
                      className={`${getRowClasses(index + 1)} ${player.id === user?.id ? 'ring-2 ring-inset ring-primary' : ''}`}
                    >
                      <td className={`h-[72px] px-6 py-2 ${index === 0 ? 'text-lg' : ''}`}>{index + 1}</td>
                      <td className={`h-[72px] px-6 py-2 ${index === 0 ? 'text-base' : ''}`}>
                        {getIconPosition(index + 1)} {player.name}
                      </td>
                      <td className={`h-[72px] px-6 py-2 ${index === 0 ? 'text-base' : ''}`}>{player.group}</td>
                      <td className={`h-[72px] px-6 py-2 text-right ${index === 0 ? 'text-base' : ''}`}>
                        {player.score.toLocaleString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-text-muted">
                      Nenhum jogador encontrado.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Position Card */}
        {user && userPosition && (
          <div>
            <div className="flex items-center gap-4 rounded-lg bg-surface-subtle px-6 min-h-16 justify-between border border-border">
              <div className="flex items-center gap-4">
                <UserIcon size={24} />
                <p className="text-base font-medium flex-1 truncate text-text">Sua Posição</p>
              </div>
              <div className="shrink-0">
                <p className="text-base font-semibold text-text">
                  {userPosition.rank > 0 ? `#${userPosition.rank}` : 'Fora do top 50'} -{' '}
                  {userPosition.score.toLocaleString()} Pontos
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default RankingPage;
