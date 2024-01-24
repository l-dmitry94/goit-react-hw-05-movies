import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Styled = {
    MainInfo: styled.div`
        display: flex;
        gap: 20px;
    `,

    WrapperImage: styled.div`
        width: 350px;
    `,

    Info: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
        line-height: 1.5;
    `,

    Title: styled.h2`
        font-size: 28px;
        margin-bottom: 4px;
    `,

    BoldTitle: styled.b`
        font-size: 18px;
        margin-right: 8px;
    `,

    DetailTitle: styled.h3`
        font-size: 22px;
        margin-bottom: 10px;
    `,

    DetailList: styled.ul`
        display: flex;
        gap: 12px;
        text-transform: uppercase;
        margin-bottom: 30px;
    `,

    DetailLink: styled(NavLink)`
        display: inline-block;
        min-width: 96px;
        padding: 6px 0;
        border-radius: 4px;
        color: #fff;
        text-align: center;
        background-color: #6e6767;

        &.active {
            background-color: #26114e;
        }
    `,
};

export default Styled;
