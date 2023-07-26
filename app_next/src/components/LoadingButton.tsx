import React, { ReactNode } from 'react';
import ButtonLoader from '@/common/Loader/button';
interface LoadingButtonProps {
  isLoading: boolean;
  onClick: (event: React.FormEvent) => void;
  children: ReactNode;
  className?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ isLoading, onClick, children, className  }) => {
  return (
    <button className={className} onClick={onClick} disabled={isLoading}>
      {isLoading ? ButtonLoader() : children}
    </button>
  );
};

export default LoadingButton;
