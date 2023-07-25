import { FC } from 'react';

interface BadgeType {
  text: string;
}

const Badge: FC<BadgeType> = ({ text }) => {
  return <div className="bg-[#232323] rounded-full px-3 py-1 text-sm font-semibold">{text}</div>;
};

export default Badge;
