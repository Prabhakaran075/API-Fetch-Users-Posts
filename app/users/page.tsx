import { User } from '@/lib/types';
import Link from 'next/link';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user: User) => (
          <Link
            key={user.id}
            href={`/users/${user.id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}