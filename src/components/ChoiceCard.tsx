import React from "react";

interface ChoiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ChoiceCard = ({ title, description, icon, className = "" }: ChoiceCardProps) => {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-ink/5 bg-white p-6 text-ink shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-xl ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-mint transition-transform duration-500 group-hover:scale-x-100" />
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blush text-2xl text-accent transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-brand group-hover:to-mint group-hover:text-white">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
        {description}
      </p>
    </div>
  );
};

export default ChoiceCard;
