import { FC, ReactNode } from 'react';

import { Header, Footer } from '../../organisms';

type LayoutProps = {
  appNav: ReactNode;
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ appNav, children }): JSX.Element => (
  <>
    <Header />
    <div className="base-layout-body flex">
      { appNav }
      <main className="flex-1">{children}</main>
    </div>
    <Footer />
  </>
);
