export default function SkeletonList({ rows = 3 }: { rows?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: rows * 3 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:bg-gray-900 dark:border-gray-800"
          aria-hidden
        >
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-2/3 bg-gray-100 dark:bg-gray-800 animate-pulse rounded" />
              <div className="h-3 w-1/3 bg-gray-100 dark:bg-gray-800 animate-pulse rounded" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded" />
            <div className="h-3 w-5/6 bg-gray-100 dark:bg-gray-800 animate-pulse rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
