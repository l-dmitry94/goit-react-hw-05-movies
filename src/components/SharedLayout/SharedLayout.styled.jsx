import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Styled = {
    Header: styled.header`
        font-family: Arial, Helvetica, sans-serif;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        padding: 10px 0;
    `,
    Container: styled.div`
        max-width: 990px;
        margin: 0 auto;
        padding: 0 15px;
    `,
    List: styled.ul`
        display: flex;
        gap: 30px;
    `,

    Link: styled(NavLink)`
        font-size: 18px;

        &.active {
            font-weight: 700;
            color: #d20909
        }
    `,

    Wrapper: styled.div`
        padding: 40px 0 80px;
    `
};

export default Styled;
