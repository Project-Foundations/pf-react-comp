import { FC } from 'react';

import { Logo } from '../../atoms/brand/logo.component';
import { ProfileNav } from '../nav';

export const Header: FC = (): JSX.Element => (
  <header className="flex justify-between items-center p-2 shadow-md bg-primary">
    <Logo imagePath="assets/svg/kruger.svg" />
    <ProfileNav />
  </header>
);
