import PropTypes from "prop-types";
import "./Button.scss";

export default function Button({ children }) {
    return (
        <div className="account-content-wrapper cta">
            <button className="transaction-button">{children}</button>
        </div>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
};
