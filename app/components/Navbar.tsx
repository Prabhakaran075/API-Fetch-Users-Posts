"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex algn-center justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/posts"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname?.startsWith('/posts') 
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Posts
            </Link>
            <Link
              href="/users"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname?.startsWith('/users')
                  ? 'border-indigo-500 text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}