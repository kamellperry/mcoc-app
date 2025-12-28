import { BottomNav } from "@/components/app/bottom-nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-svh pb-20">
      {children}
      <BottomNav />
    </div>
  );
}
