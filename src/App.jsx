import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:15000,
    annualInvestment:900,
    expectedReturn: 6,
    duration:10
  });
  function handleChange(identifier,newValue){
    setUserInput((prevValue)=>{
        return {
            ...prevValue,
            [identifier]:+newValue
        }
    });

}
const inputValid = userInput.duration>=1;
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputValid &&<p className="center">Please enter the value greater than 0</p>}
      {inputValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
