import { User } from '@/lib/types';
import { notFound } from 'next/navigation';

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

// ✅ Add generateStaticParams to predefine dynamic routes
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return users.map((user) => ({ id: user.id.toString() }));
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">{user.name}</h1>
        
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Contact Information</h2>
            <div className="mt-2 text-gray-600">
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Website: {user.website}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Address</h2>
            <div className="mt-2 text-gray-600">
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">Company</h2>
            <div className="mt-2 text-gray-600">
              <p>{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}