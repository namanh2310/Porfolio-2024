import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SkillCardProps {
  icon: IconType;
  skillName: string;
}

const Card: React.FC<SkillCardProps> = ({ icon: Icon, skillName }) => {
  return (
    <div className='flex flex-col items-center justify-center  h-36 bg-cardbg gap-4 rounded-lg border border-sky-500'>
      <Icon size={36}></Icon>
      <p className='font-bold text-sm md:text-lg'>{skillName}</p>
    </div>
  );
};

export default Card;
