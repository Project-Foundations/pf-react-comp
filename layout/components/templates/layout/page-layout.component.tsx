import { FC, ReactNode } from 'react';

type PageLayoutProps = {
  nav: ReactNode;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = ({ nav, children }): JSX.Element => (
  <>
    <nav className="w-full p-2 bg-white">{nav}</nav>
    <section className="base-page-layout__body overflow-y-auto p-4 bg-gray-50">{children}</section>
  </>
);
