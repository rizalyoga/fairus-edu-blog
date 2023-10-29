import Sidebar from "@/components/sidebar/Sidebar";
import HeaderDashboard from "@/components/navbar/HeaderDashboard";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      {/* <HeaderDashboard /> */}
      <div className="drawer lg:drawer-open">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        {/* Content  */}
        <div className="drawer-content flex flex-col">
          <HeaderDashboard />
          <div className="min-h-screen overflow-y-auto pt-5 px-5 bg-base-200">
            {children}
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
