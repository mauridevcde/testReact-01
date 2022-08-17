import PropTypes from "prop-types"

export const FirstApp = ({title, name}) => {
    return (
        <div>
            <h1>{title}, {name}</h1>
        </div>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "esta es una props default",
    name: "mauricio"
};