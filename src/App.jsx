import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration > 0;

  function changeHandler(identifier, changedValue) {
    setUserInput((prevData) => {
      return {
        ...prevData,
        [identifier]: +changedValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={changeHandler} />
      {!isValidInput && <p className="center">Enter valid duration</p>}
      {isValidInput && <Result userInput={userInput} />}
    </>
  );
}

export default App;
