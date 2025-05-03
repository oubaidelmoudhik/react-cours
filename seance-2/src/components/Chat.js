import { useState } from "react";

export default function Chat() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello!!");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => alert(`You said ${message} to ${to}`), 5000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>To: </label>
        <select value={to} onChange={(event) => setTo(event.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
        <br />
        <textarea
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
