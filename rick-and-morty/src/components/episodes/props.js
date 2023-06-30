import PropTypes from "prop-types";

const props = {
    propTypes: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        air_date: PropTypes.string,
        characters: PropTypes.array
    },
    defaultProps: {
        name: "unknown",
        air_date: "unknown",
        characters: [],
    },
};

export default props;