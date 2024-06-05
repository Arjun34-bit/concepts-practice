import "./notification.css";

import { FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const icons = {
  success: <FaCheckCircle />,
  info: <MdErrorOutline />,
  error: <IoIosWarning />,
  close: <IoIosCloseCircleOutline />,
};

const Notification = ({
  type = "info",
  message,
  duration,
  onClose = () => {},
}) => {
  return (
    <div className={`notification-${type}`}>
      {icons[type]}
      {message}
      <IoIosCloseCircleOutline
        color="white"
        className="closeBtn"
        onClick={() => onClose}
      />
      ,
    </div>
  );
};

export default Notification;
