import React, { ReactNode } from 'react';

type LayoutProps = {
  children: React.ReactNode;
  show: boolean;
};

const Layout: React.FC<LayoutProps> = ({ show, children }) => {
  if (show) {
    // Render layout when show is true
    return (
      <div>
        {/* Header */}
        <header>
          <h1 className="mb-8 text-4xl font-bold">Header</h1>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          {/* Your footer content goes here */}
        </footer>
      </div>
    );
  }

  // Render an alternative layout when show is false
  return (
    <div>
      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
