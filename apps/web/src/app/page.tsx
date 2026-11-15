
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <section className="flex flex-1 flex-col">
        <Header />

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Overview
          </h2>

          <p className="mt-2 text-slate-500">
            Welcome to your Nuvora workspace.
          </p>
        </div>
      </section>
    </main>
  );
}
