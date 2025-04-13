import { Outlet } from 'react-router';

import { Header } from '~/components/base-layout/header';

export const LayoutPage = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
    </>
);
