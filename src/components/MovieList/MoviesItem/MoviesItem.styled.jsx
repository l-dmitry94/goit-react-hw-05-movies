import styled from '@emotion/styled';

const Styled = {
    Item: styled.li`
        flex-basis: calc((100% - 96px) / 5);
    `,

    Image: styled.img`
        min-height: 268px;
        margin-bottom: 10px;
    `,

    Title: styled.p`
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 6px;
    `,
    ShortDescr: styled.p`
        font-size: 14px;
    `,
};

export default Styled;
