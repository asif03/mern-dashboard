import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BeakerIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "../../contexts/AuthContext";
import apiInstance from "../../uitls/api";

const links = [
  { href: "/account-settings", label: "Account settings" },
  { href: "/support", label: "Support" },
  { href: "/license", label: "License" },
];

const NavMenus = () => {
  const { user, loggedIn, checkLoginState } = useAuthContext();

  const handleLogout = async () => {
    try {
      await apiInstance.post("/auth/logout");
      // Check login state again
      checkLoginState();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        <img
          src={user?.picture}
          alt={user?.name}
          className="h-12 w-12 rounded-full"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="flex flex-col px-1 py-1">
            {links.map((link) => (
              /* Use the `active` state to conditionally style the active item. */
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <BeakerIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    ) : (
                      <BeakerIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                    )}
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}

            <Menu.Item>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavMenus;
