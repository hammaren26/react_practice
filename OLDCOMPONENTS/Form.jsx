import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(inputValue);
  };

  return (
    <div>
      <form>
        <label>
          <div>firstName:</div>
          <input
            name="name"
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                firstName: event.target.value,
              })
            }
            value={inputValue.firstName}
          />
        </label>
        <br />
        <br />
        <label>
          <div>lastName:</div>
          <input
            name="lastname"
            onChange={(event) =>
              setInputValue({
                ...inputValue,
                lastName: event.target.value,
              })
            }
            value={inputValue.lastName}
          />
        </label>

        <button onClick={(e) => handleSubmit(e)}>send form</button>
      </form>

      <hr />
      <h1>firstName: {inputValue.firstName}</h1>
      <h1>lastName: {inputValue.lastName}</h1>
    </div>
  );
}
