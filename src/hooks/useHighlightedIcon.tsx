import { GavelIcon, MedalMilitaryIcon, PawPrintIcon } from '@phosphor-icons/react';

const useHighlightedIcon = () => {
  const findIcon = (slug: string) => {
    switch (slug) {
      case 'promessa-do-lobinho':
        return <PawPrintIcon size={32} />;
      case 'promessa-escoteira':
        return <MedalMilitaryIcon size={32} />;
      case 'lei-escoteira':
        return <GavelIcon size={32} />;
      default:
        return null;
    }
  };

  return {
    findIcon,
  };
};

export default useHighlightedIcon;
