import { useEffect, useState } from "react";

interface messageData {
  avatar?: string;
  name?: string;
  reviewText?: string;
  rating?: string | number;
  source?: string;
  url?: string;
  timeStamp?: string;
}

export default function App() {
  const [message, setMessage] = useState<messageData[]>();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = JSON.parse(event.data);

      console.log(data);

      if (data.key === "gz-message") {
        setMessage(data.data as messageData[]);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!message) return <div>loading</div>;

  return (
    <div className="flex flex-col overflow-scroll space-y-4">
      {message.map((data, key) => (
        <div key={key}>
          <div>avatar: {data.avatar}</div>
          <div>name: {data.name}</div>

          <div>text: {data.reviewText}</div>
          <div>rating: {data.rating}</div>
          <div>source: {data.source}</div>
          <div>url: {data.url}</div>
          <div>timeStamp: {data.timeStamp}</div>
        </div>
      ))}
    </div>
  );
}
