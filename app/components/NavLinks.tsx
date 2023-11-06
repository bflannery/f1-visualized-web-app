'use client';
import {
  UserGroupIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  FlagIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Circuits', href: '/circuits', icon: FlagIcon },
  {
    name: 'Constructors',
    href: '/constructors',
    icon: WrenchScrewdriverIcon,
  },
  { name: 'Drivers', href: '/drivers', icon: UserGroupIcon },
  { name: 'Races', href: '/races', icon: TrophyIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-500 text-black md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-red-700 hover:bg-red-500 hover:text-black': pathname === link.href,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
