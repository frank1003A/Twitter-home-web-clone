import BaseLayout from "components/layout/BaseLayout";
import Loader from "components/ui/Loader";
import { useEffect, useState } from "react";
import "./App.scss";
import Home from "./pages/Home";

function App() {
  // loader state
  const [mount, setMount] = useState<boolean>(true);

  // loader timer state
  const [timeLeft, setTimeLeft] = useState(10);

  /**
   * handles the loader timeout and
   * start time
   */
  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setMount(false);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft, mount]);

  if (mount) {
    return (
      <BaseLayout>
        <Loader />
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <Home />
    </BaseLayout>
  );
}

export default App;
