"use client";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useCookies } from "next-client-cookies";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Entrar", href: "/login" },
    { name: "Cadastre-se", href: "/signup" },
    { name: "Sair", href: "/logout" },
  ];

  return (
    <header className="flex h-16 border-b border-gray-900/10">
      <div className="mx-auto flex w-full items-center justify-start px-6 lg:px-8 gap-x-6">
        <button
          type="button"
          className="-m-3 p-3"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </button>
        <a href="/" className="text-lg font-semibold leading-6 text-gray-900">
          ChicoTech
        </a>
      </div>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="-ml-0.5 flex h-16 items-center gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="-ml-0.5">
              <a href="/" className="-m-1.5 block p-1.5">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  ChicoTech
                </p>
              </a>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
