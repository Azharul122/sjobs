import TopNav from "@/components/pages/dashboardLayout/top-nav";
import SidebarUserDashboard from "@/components/pages/userDashboard/SidebarUserDashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`flex h-screen`}>
      <SidebarUserDashboard />
      <div className="w-full flex flex-1 flex-col">
        <header className="h-[70px] md:h-16 border-b border-gray-200">
          <TopNav />
        </header>
        <main className="flex-1 overflow-auto p-6 bg-[#F5F5F5]">
          {children}
        </main>
      </div>
    </div>
  );
}
