import PropTypes from "prop-types";
import cx from "classnames";
import "./TipseenImage.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-image";
const TipseenImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={cx(BASE_CSS_CLASS, className)} />;
};

TipseenImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string,
  className: PropTypes.string
};

TipseenImage.defaultProps = {
  src: undefined,
  alt: undefined,
  className: ""
};

export default TipseenImage;
