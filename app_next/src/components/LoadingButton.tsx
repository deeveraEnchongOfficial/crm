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
      {isLoading ? <span>Loading...</span> : children}
    </button>
  );
};

export default LoadingButton;
