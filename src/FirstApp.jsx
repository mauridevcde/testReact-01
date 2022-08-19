import PropTypes from "prop-types"

export const FirstApp = ({title,subtitle, name}) => {
    return (
        <div>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle}</p>
        </div>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: "esta es una props default",
    name: "mauricio es default"
};