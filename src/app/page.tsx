// app/page.tsx
"use client";

export default function Page() {
  return (
    <div className="max-w-[1200px] mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column: To do */}
        <section className="bg-white p-4 rounded-lg border border-dashed border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">To do (4)</h3>
            <button className="text-sm text-gray-500">+ Add new task</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded shadow-sm">Task card placeholder</div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">Task card placeholder</div>
          </div>
        </section>

        {/* Column: In progress */}
        <section className="bg-white p-4 rounded-lg border border-dashed border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">In progress (4)</h3>
            <button className="text-sm text-gray-500">+ Add new task</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded shadow-sm">Task card placeholder</div>
            <div className="p-4 bg-gray-50 rounded shadow-sm">Task card placeholder</div>
          </div>
        </section>

        {/* Column: Done */}
        <section className="bg-white p-4 rounded-lg border border-dashed border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Done (3)</h3>
            <button className="text-sm text-gray-500">+ Add new task</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded shadow-sm">Task card placeholder</div>
          </div>
        </section>
      </div>
    </div>
  );
}
