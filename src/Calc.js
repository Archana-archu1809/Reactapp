import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, InputNumber } from "antd";
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
    <div
      style={{
        textAlign: "center",
        padding: 100,
        position: "absolute",
        left: 600,
        top: 150,
        backgroundColor: "blanchedalmond",
        border: "2px dashed black",
        borderRadius: 10,
      }}
    >
      <InputNumber
        style={{ position: "relative", top: -15 }}
        value={inputValue}
        type="number"
        onChange={(value) => {
          setInputValue(parseInt(value));
        }}
      ></InputNumber>

      <br />
      <Button
        type="primary"
        style={{
          borderRadius: 7,
          margin: 9,
          position: "relative",
          left: -40,
          top: 15,
        }}
        onClick={() => {
          calculateTotal();
        }}
      >
        Add
      </Button>
      <Button
        type="primary"
        style={{
          borderRadius: 7,
          margin: 9,
          position: "relative",
          right: -40,
          top: 15,
        }}
        onClick={() => {
          calculateSubtract();
        }}
      >
        Sub
      </Button>
      <br />
      <h1 style={{ position: "relative", top: 35 }}>{output}</h1>
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
    </div>
  );
}
