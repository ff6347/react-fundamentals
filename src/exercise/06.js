// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from "react";

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  const inputRef = React.useRef();
  const [username, setUsername] = React.useState("");
  // const [error, setError] = React.useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(inputRef.current.value);
    onSubmitUsername(inputRef.current.value);
  };
  const changeHandler = e => {
    const text = e.target.value;

    setUsername(text.toLowerCase());
    // setError(isValid ? null : "Username must be lowercase");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"text"}>Username:</label>
        <input
          value={username}
          type="text"
          id="text"
          name="username"
          ref={inputRef}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
