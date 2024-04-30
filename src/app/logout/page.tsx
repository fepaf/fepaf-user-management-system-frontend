"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useCookies } from "next-client-cookies";

export default function LogoutPage() {
  const router = useRouter();
  const cookies = useCookies();

  useEffect(() => {
    toast("Logout realizado com sucesso", { type: "success" });
    cookies.remove("token");
    router.push("/login");
  }, [cookies, router]);

  return <div>Saindo...</div>;
}
