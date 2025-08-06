import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <header className="bg-white shadow p-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Team Blog</h1>
      </header>

          <main className="flex-1 container mx-auto px-4">
            {children}
          </main>

      <footer className="bg-white shadow p-4 mt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Team Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;