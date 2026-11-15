
import Link from "next/link";

const navigationItems = [
  { label: "Overview", href: "/", icon: "◫" },
  { label: "My Files", href: "/files", icon: "▤" },
  { label: "Shared Files", href: "/shared", icon: "⇄" },
  { label: "Recent", href: "/recent", icon: "◷" },
  { label: "Starred", href: "/starred", icon: "☆" },
];

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white px-5 py-6">
      <Link href="/" className="mb-10 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
          N
        </div>

        <span className="text-2xl font-bold tracking-tight text-slate-900">
          nuvora
        </span>
      </Link>

      <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Workspace
      </p>

      <nav className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-700"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-800">
          Nuvora Storage
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Your files, securely stored.
        </p>
      </div>
    </aside>
  );
}
