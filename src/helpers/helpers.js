const helpers = {
    normalizedArr: arr => {
        return arr.map(({ name }, index, arr) => (
            <span key={name}>
                {name}
                {index !== arr.length - 1 ? ', ' : ''}
            </span>
        ));
    },

    getFullYear: dateString => {
        const date = new Date(dateString);

        return date.getFullYear();
    },
};

export default helpers;
