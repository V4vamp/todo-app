"use client";

export default function Topbar() {
  return (
    <header className="flex items-center gap-4 px-6 py-4 bg-white border-b">
      <h1 className="text-lg font-semibold">Welcome back, Vincent 👋</h1>

      <div className="ml-4 text-sm text-gray-500 hidden md:block">Board view</div>

      <div className="flex-1" />

      <div className="flex items-center gap-3">
        <input
          aria-label="search"
          placeholder="Search tasks, projects..."
          className="hidden md:inline-block px-3 py-2 border rounded-md text-sm"
        />
        <button aria-label="notifications" className="p-2 rounded-md hover:bg-gray-100">
          🔔
        </button>
        <div className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src="/avatar-placeholder.png"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
