import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Calc() {
  const [inputValue, setInputValue] = useState(0);
  const [output, setOutput] = useState(inputValue);
  const notify = () => toast("it is negative value");
  const calculateTotal = () => {
    setOutput(output + inputValue);
  };
  const calculateSubtract = () => {
    setOutput(output - inputValue);
    if (output <= 0) {
      setOutput(0);
      notify();
    }
  };
  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(parseInt(event.target.value));
        }}
        type="number"
      ></input>

      <br />
      <button
        onClick={() => {
          calculateTotal();
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          calculateSubtract();
        }}
      >
        sub
      </button>
      <br />
      <input value={output} />
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
    </>
  );
}
