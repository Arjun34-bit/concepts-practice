import { useCallback, useState } from "react";
import Notification from "../components/Toast/notification";

const useNotification = (position = "top-right") => {
  const [notification, setNotification] = useState(null);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearInterval(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const notificationComponent = notification ? (
    <div className={`${position}`}>
      <Notification {...notification} />
    </div>
  ) : null;

  return { notificationComponent, triggerNotification };
};

export default useNotification;
