import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface SocialLink {
  id: string;
  icon: React.ElementType;
  label: string;
  href: string;
}

interface ActionButtonProps {
  text: string;
  href: string;
}

interface ProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton: ActionButtonProps;
}

const GlassmorphismProfileCard = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
}: ProfileCardProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <div
        className="relative flex flex-col items-center p-8 rounded-3xl border-2 transition-all duration-500 ease-out bg-white dark:bg-[#18181B] border-[#E4E4E7] dark:border-[#27272A] hover:border-gray-300 dark:hover:border-gray-600"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-[#E4E4E7] dark:border-[#27272A]">
          <Image
            src={avatarUrl}
            alt={`${name}'s Avatar`}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-black dark:text-white">{name}</h2>
        <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-gray-700 dark:text-gray-300">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-[#E4E4E7] dark:bg-[#27272A]" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton key={item.id} item={item} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
          ))}
        </div>

        <ActionButton action={actionButton} />
      </div>
    </div>
  );
};

const SocialButton = ({ item, setHoveredItem, hoveredItem }: {
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}) => (
  <div className="relative">
    <a
      href={item.href}
      onClick={(e) => e.preventDefault()}
      className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon size={20} className="transition-all duration-200 ease-out text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
      </div>
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const ActionButton = ({ action }: { action: ActionButtonProps }) => (
  <a
    href={action.href}
    className="flex items-center gap-2 px-6 py-3 mt-8 rounded-full font-semibold text-base transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
  >
    <span>{action.text}</span>
    <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
  </a>
);

const Tooltip = ({ item, hoveredItem }: { item: SocialLink; hoveredItem: string | null }) => (
  <div
    role="tooltip"
    className={`absolute -top-12 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-black text-white border-gray-800 ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-black border-b border-r border-gray-800" />
  </div>
);

export { GlassmorphismProfileCard };
export type { ProfileCardProps, SocialLink, ActionButtonProps };
