
export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          Welcome to Nuvora
        </h1>
        <p className="text-sm text-slate-500">
          Manage your files securely.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100"
        >
          ♧
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
          U
        </div>
      </div>
    </header>
  );
}
