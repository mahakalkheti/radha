import { useState } from "react";

function SignupForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload रोकता है

    const data = { name, username };

    try {
      const res = await fetch("https://radha-d10l.onrender.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log(result);
      alert("Form submitted successfully!"); // Optional UI feedback
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
