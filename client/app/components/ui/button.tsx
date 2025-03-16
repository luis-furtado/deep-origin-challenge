import type { ReactNode } from 'react';

export function Button({
  children,
  onClick,
  className,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer transition-all$ ${className} ${disabled ? 'bg-gray-300 hover:bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
