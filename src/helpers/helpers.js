export const normalizedArr = arr => {
    return arr.map(({ name }, index, arr) => (
        <span key={name}>
            {name}
            {index !== arr.length - 1 ? ', ' : ''}
        </span>
    ));
};
