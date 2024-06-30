import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.key === "gz-message") {
        setMessage(
          typeof event.data === "string"
            ? event.data
            : JSON.parse(event.data.data)
        );
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
