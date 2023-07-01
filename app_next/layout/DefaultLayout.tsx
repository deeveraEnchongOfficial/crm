import React, { ReactNode, useState } from 'react';
import Header from '../src/components/Header';
import Sidebar from '../src/components/Sidebar';

type LayoutProps = {
  children: React.ReactNode;
  show: boolean;
};

const DefaultLayout: React.FC<LayoutProps> = ({ show, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (show) {
    // Render layout when show is true
    return (
      // <div>
      //   {/* Header */}
      //   <header>
      //     <h1 className="mb-8 text-4xl font-bold">Header</h1>
      //   </header>

      //   {/* Main content */}
      //   <main>{children}</main>

      //   {/* Footer */}
      //   <footer>
      //     {/* Your footer content goes here */}
      //   </footer>
      // </div>
      <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
              <main>{children}</main>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
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

export default DefaultLayout;
