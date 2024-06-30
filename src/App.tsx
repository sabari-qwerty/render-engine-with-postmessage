import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const sendMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.key === "gz-message") {
        setData(data.data);
      }
    };

    window.addEventListener("message", sendMessage);

    return window.removeEventListener("message", sendMessage);
  }, []);

  return <pre>{JSON.stringify(data)}</pre>;
}
