import { FunctionComponent, MouseEvent } from 'react';

export enum ButtonType {
  Primary = 'text-white bg-primary',
  Secondary = 'text-black bg-gray-100'
}

export interface ButtonProps {
  children: JSX.Element | string;
  type?: ButtonType;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = ButtonType.Primary,
  onClick
}): JSX.Element => (
  <button
    className={`flex justify-center items-center py-1 px-6 rounded-full ${type}`}
    onClick={onClick}
  >
    {children}
  </button>
);
