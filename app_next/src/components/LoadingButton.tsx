import React, { ReactNode } from 'react';

interface LoadingButtonProps {
  isLoading: boolean;
  onClick: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, onClick, children, className  }) => {
  return (
    <button className={className} onClick={onClick} disabled={isLoading}>
      {isLoading ? <div className="h-6 w-6 animate-spin rounded-full border-2 ml-auto mr-auto border-white border-t-transparent"></div>: children}
    </button>
  );
};

export default LoadingButton;
