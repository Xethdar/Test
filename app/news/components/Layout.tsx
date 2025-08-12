import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto max-w-3xl p-5 font-sans">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">Bond Market News</h1>
        <hr className="mt-4" />
      </header>
      <main>{children}</main>
      <footer className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bond News
      </footer>
    </div>
  );
}
