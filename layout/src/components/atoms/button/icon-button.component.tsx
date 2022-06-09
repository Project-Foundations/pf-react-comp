import { FunctionComponent, MouseEvent } from 'react';

export interface IconButtonProps {
  iconClass: string;
  className?: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  iconClass,
  className,
  onClick
}): JSX.Element => (
  <button
    className={`flex justify-center items-center p-2 rounded-full text-white ${className}`}
    onClick={onClick}
  >
    <span className={iconClass}></span>
  </button>
);
