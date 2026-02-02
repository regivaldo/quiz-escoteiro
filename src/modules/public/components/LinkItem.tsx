import { Link } from 'react-router';

type LinkType = {
  to: string;
  label: string;
};

const LinkItem = ({ to, label }: LinkType) => {
  return (
    <Link className="text-gray-400 text-base font-normal leading-normal min-w-40 hover:text-primary" to={to}>
      {label}
    </Link>
  );
};

export default LinkItem;
