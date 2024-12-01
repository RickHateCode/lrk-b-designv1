"use client";

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'page acceuil', href: '#' },
  { name: 'Nos services', href: '#' },
  { name: 'Qui somme nous?', href: '#' },
  { name: 'contact', href: '#' },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          
          <div className="fixed lg:hidden right-4 top-5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-black"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          
          <div className='w-full flex items-center justify-center'>
          <div className="hidden lg:flex fixed lg:gap-x-12  lg:bg-black px-5 py-3  rounded-md ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          </div>
          
          
          
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-64 h-64 overflow-y-auto bg-white px-6 py-6 mt-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

            <div className="flex items-center justify-between fixed right-3 top-4">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white "
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      
    </div>
  )
}


// import  { useState } from "react";
// import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu"
// import { cn } from "../lib/utils";

// export function Navigation() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
//     </div>
//   );
// }

// export default Navigation;

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
