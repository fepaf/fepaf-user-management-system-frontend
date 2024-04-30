import { cookies } from "next/headers";

interface User {
  name: string;
  lastName: string;
  email: string;
  role: string;
}

async function getUsers(): Promise<User[]> {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return [];
  }

  const sort = {
    role: "ASC",
    name: "ASC",
  };

  const response = await fetch(
    `http://localhost:3000/users?sort=${JSON.stringify(sort)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    return data.found.users;
  } else {
    return [];
  }
}

export async function UserList() {
  const data = await getUsers();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name} {person.lastName}{" "}
                {person.role === "ADMIN" ? (
                  <span className="text-xs font-semibold text-red-500">
                    Admin
                  </span>
                ) : null}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {person.email}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
