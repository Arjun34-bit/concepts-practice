import BentoGrid from "../../components/BentoGrid/bento-grid";
import Notification from "../../components/Toast/notification";
import useNotification from "../../hooks/useNotification";
import "./home.css";

const Home = () => {
  const { notificationComponent, triggerNotification } =
    useNotification("top-left");
  return (
    <div className="parent">
      <BentoGrid />
      <div className="notification-toast">
        <button
          onClick={() => {
            triggerNotification({
              type: "success",
              message: "Task Completed Successfully",
              duration: 3000,
            });
          }}
        >
          Trigger Success
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "error",
              message: "Task Completion Failed",
              duration: 3000,
            });
          }}
        >
          Trigger Error
        </button>
        {notificationComponent}
      </div>
    </div>
  );
};

export default Home;
