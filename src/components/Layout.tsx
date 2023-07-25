import { Outlet, useLocation } from 'react-router-dom';
import Box from './Box';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { useMemo } from 'react';
import SidebarItem from './SidebarItem';
import Library from './Library';
import { libraries } from '../lib/dummyData';

const Layout = () => {
  const pathname = useLocation().pathname;
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        href: '/search',
        active: pathname === '/search',
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <aside className="hidden md:grid grid-rows-6 gap-y-12 bg-black h-screen w-[300px] p-2">
        <Box className="row-span-1">
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="h-full row-span-5">
          <Library libraries={libraries} />
        </Box>
      </aside>
      <main className="h-screen flex-1 py-2 pr-2 pl-2 md:pl-0">
        <Box className="h-full">
          <Outlet />
        </Box>
      </main>
    </div>
  );
};

export default Layout;
