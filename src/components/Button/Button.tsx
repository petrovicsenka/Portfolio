import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
