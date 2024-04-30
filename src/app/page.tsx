import { UserList } from "@/components/UserList";
import { useCookies } from "next-client-cookies";
import { cookies } from "next/headers";

async function getUser() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (!token) {
    return null;
  }

  const response = await fetch("http://localhost:3000/auth/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return { ...data, token };
  } else {
    return null;
  }
}

export default async function Home() {
  const data = await getUser();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center w-full gap-y-8">
      <div className="text-2xl font-semibold">
        <h1 className="font-normal text-gray-600">
          Bem-vindo,{" "}
          <span className="text-gray-900 font-semibold">
            {data ? data.name : "visitante"}
          </span>
        </h1>
      </div>
      {data ? (
        <div>
          <h2 className="text-xl text-gray-900">Usuários da plataforma</h2>
          <UserList />
        </div>
      ) : (
        <p className="text-gray-600">
          Faça{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </a>{" "}
          para continuar.
        </p>
      )}
    </div>
  );
}
