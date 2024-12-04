import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="Email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="Password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={handlePasswordChange}
          value={password}
        />
        <button type="submit" className="btn btn-accent w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

// import { useState } from "react";

// const App = () => {
// const [show, imageSet] = useState(true);

// const image = () => {
// imageSet(!show);
// };

// return (
// <div className="h-screen flex  flex-col justify-center items-center space-y-4">
// {show ? (
// <div className="card bg-primary text-primary-content w-96 ">
// <div className="card-body">
// <h2 className="card-title">Card title!</h2>
// <p>If a dog chews shoes whose shoes does he choose?</p>
// </div>
// </div>
// ) : (
// <div className=""></div>
// )}

// <button className="btn btn-active btn-accent" onClick={image}>
// {show ? "hide" : "show"}
// </button>
// </div>
// );
// };

// export default App;

// import { useState } from "react";

// const App = () => {
// const [name, setName] = useState("kayla");

// const nameGhang = () => {
// setName("grace");
// };
// return (
// <div>
// <div>
// <p
// className="h-screen flex justify-center text-4xl"
// onClick={nameGhang}
// >
// {name}
// </p>
// </div>
// </div>
// );
// };

// export default App;

// const App = () => {

// const [count, countState] = useState(0);

// const reset = () => {
// countState(0);
// };
// const add = () => {
// countState(count + 1);
// };
// const sub = () => {
// countState(count - 1);
// };

// return (
// <div className="h-screen flex justify-center items-center text-4xl flex-col mb-10">
// <p>{count}</p>
// <div className="flex space-x-1">
// <button className="btn btn-active btn-neutral" onClick={reset}>
// Neutral
// </button>
// <button className="btn btn-active btn-primary" onClick={add}>
// Primary
// </button>
// <button className="btn btn-active btn-secondary" onClick={sub}>
// Secondary
// </button>
// </div>
// </div>
// );
//  };

// export default App;
