import { Outlet } from 'react-router-dom';
import Styled from './SharedLayout.styled';

const { Header, Container, List, Link, Wrapper } = Styled;

const SharedLayout = () => {
    return (
        <>
            <Header>
                <Container>
                    <nav>
                        <List>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/movies'}>Movies</Link>
                            </li>
                        </List>
                    </nav>
                </Container>
            </Header>
            <Wrapper>
                <Container>
                    <Outlet />
                </Container>
            </Wrapper>
        </>
    );
};

export default SharedLayout;
