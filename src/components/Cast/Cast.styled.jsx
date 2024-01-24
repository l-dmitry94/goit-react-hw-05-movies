import styled from "@emotion/styled"

const Styled = {
    CastList: styled.ul`
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    `,

    CastItem: styled.li`
        flex-basis: calc((100% - 48px) / 5);
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid black;
        padding: 10px;
    `,

    CastImage: styled.img`
        min-height: 172px;
        object-fit: cover;
        margin-bottom: 8px;
    `,

    CastName: styled.p`
        font-weight: 700;
        margin-bottom: 6px;
    `,

    CastCharacter: styled.p`
        font-size: 14px;
    `
}

export default Styled