import PropTypes from "prop-types";

const props = {
    propTypes: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        type: PropTypes.string,
        dimension: PropTypes.string,
        residents: PropTypes.array,
    },
    defaultProps: {
        name: "unknown",
        type: "unknown",
        dimension: "unknown",
        residents: []
    }
};
export default props;