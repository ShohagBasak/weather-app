import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <div className='min-h-screen flex items-center justify-center'>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;