import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/movies'}>Movies</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
};

export default SharedLayout;
