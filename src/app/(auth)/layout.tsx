import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF9F7]">
      {/* Header */}
      <header className="flex items-center justify-center py-8">
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-stone-900"
        >
          MooHive
        </Link>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-stone-400">
        <p>&copy; {new Date().getFullYear()} MooHive. All rights reserved.</p>
      </footer>
    </div>
  );
}
