import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToggleButtonProps } from "../../constants/interfaces";

const ToggleBtn: React.FC<ToggleButtonProps> = ({
  icon,
  className,
  onClick,
  role,
  ariaLabel,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} className="fa-fw" />
    </button>
  );
};

export default ToggleBtn;
