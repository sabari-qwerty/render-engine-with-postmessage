import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sendMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      if (data.key === "gz-message") {
        console.log(data.data);
      }
    };

    window.addEventListener("message", sendMessage);

    return window.removeEventListener("message", sendMessage);
  }, []);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
