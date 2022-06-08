import { FC } from 'react';

type LogoProps = {
  imagePath: string;
};

export const Logo: FC<LogoProps> = ({ imagePath }): JSX.Element => (
  <figure>
    <img src={imagePath} className="h-10" />
  </figure>
);
