import colors from "assets/styles/variables.module.scss";
import FeatherIcon from "feather-icons-react";
import PropTypes from "prop-types";

const AppIcon = ({
  icon = "",
  size = 20,
  color = "primary",
  onClick = () => {},
  href,
  className
}) => {
  return (
    <div
      style={{
        cursor: onClick || href ? "pointer" : "",
        display: onClick || href ? "inline" : "block"
      }}
      tabIndex="0"
      onClick={onClick}
      className={className}
      role="button"
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <FeatherIcon
            style={{ strokeWidth: 1 }}
            icon={icon}
            size={size}
            color={colors[color]}
          />
        </a>
      ) : (
        <FeatherIcon
          style={{ strokeWidth: 1 }}
          icon={icon}
          size={size}
          color={colors[color]}
        />
      )}
    </div>
  );
};

AppIcon.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number
};

export default AppIcon;
