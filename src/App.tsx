import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      console.log(data);

      if (data.key === "gz-message") {
        console.log(data.data);

        setMessage(data.data);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <p id="message">{message}</p>
    </div>
  );
}
