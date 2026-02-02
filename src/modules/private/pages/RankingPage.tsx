import { UserIcon } from '@phosphor-icons/react';

const RankingPage = () => {
  // Mock data - in real app this would come from props/state/API
  const rankings = [
    {
      name: 'Ana Silva',
      group: 'G.E. Tuiuti',
      score: 12500,
    },
    {
      name: 'Bruno Costa',
      group: 'G.E. Acauã',
      score: 11800,
    },
    {
      name: 'Carla Dias',
      group: 'G.E. Falcão Peregrino',
      score: 11250,
    },
    {
      name: 'Daniel Martins',
      group: 'G.E. Tuiuti',
      score: 10900,
    },
    {
      name: 'Eduarda Lima',
      group: 'G.E. Acauã',
      score: 10500,
    },
    {
      name: 'Felipe Almeida',
      group: 'G.E. Falcão Peregrino',
      score: 10100,
    },
    {
      name: 'Gabriela Borges',
      group: 'G.E. Tuiuti',
      score: 9800,
    },
    {
      name: 'Gabriel Matos',
      group: 'G.E. Marechal Rondon',
      score: 7800,
    },
    {
      name: 'Maria Eduarda',
      group: 'G.E. Marechal Rondon',
      score: 19900,
    },
    {
      name: 'Carlos Moraes',
      group: 'G.E. Tuiuti',
      score: 7200,
    },
  ].sort((a, b) => b.score - a.score);

  const userPosition = { rank: 42, score: 5300 };

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
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
              <span className="truncate">Diário</span>
              <input className="sr-only" name="ranking-period" type="radio" value="Diário" />
            </label>
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
              <span className="truncate">Semanal</span>
              <input className="sr-only" name="ranking-period" type="radio" value="Semanal" />
            </label>
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
              <span className="truncate">Geral</span>
              <input className="sr-only" name="ranking-period" type="radio" value="Geral" defaultChecked />
            </label>
            <label className="flex h-full flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-md px-3 has-[:checked]:bg-surface has-[:checked]:shadow-sm has-[:checked]:text-text text-text-muted text-sm font-medium transition-colors">
              <span className="truncate">Meu grupo</span>
              <input className="sr-only" name="ranking-period" type="radio" value="Meu grupo escoteiro" />
            </label>
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
                {rankings.map((player, index) => (
                  <tr key={index} className={getRowClasses(index + 1)}>
                    <td className={`h-[72px] px-6 py-2 ${index === 1 ? 'text-lg' : ''}`}>{index + 1}</td>
                    <td className={`h-[72px] px-6 py-2 ${index === 1 ? 'text-base' : ''}`}>
                      {getIconPosition(index + 1)} {player.name}
                    </td>
                    <td className={`h-[72px] px-6 py-2 ${index === 1 ? 'text-base' : ''}`}>{player.group}</td>
                    <td className={`h-[72px] px-6 py-2 text-right ${index === 1 ? 'text-base' : ''}`}>
                      {player.score.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Position Card */}
        <div>
          <div className="flex items-center gap-4 rounded-lg bg-surface-subtle px-6 min-h-16 justify-between border border-border">
            <div className="flex items-center gap-4">
              <UserIcon size={24} />
              <p className="text-base font-medium flex-1 truncate text-text">Sua Posição</p>
            </div>
            <div className="shrink-0">
              <p className="text-base font-semibold text-text">
                #{userPosition.rank} - {userPosition.score.toLocaleString()} Pontos
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RankingPage;
