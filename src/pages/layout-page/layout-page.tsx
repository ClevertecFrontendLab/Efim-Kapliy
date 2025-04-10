import { Outlet } from 'react-router';

export const LayoutPage = () => (
    <>
        <div>Layout</div>
        <main>
            <Outlet />
        </main>
    </>
);
