import "./Transaction";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Button, InputNumber } from "antd";
import Transaction from "./Transaction";
import moment from "moment";
export default function Calc() {
  const [inputValue, setInputValue] = useState(0);
  const [output, setOutput] = useState(inputValue);
  const [transactions, setTransactions] = useState([]);
  const notify = () => toast("it is negative value");
  const format1 = "YYYY-MM-DDTHH:mm:ss";
  var date = new Date();

  const getTransaction = (operation) => {
    return {
      date: moment(date).format(format1),
      input: inputValue,

      operation: operation,
    };
  };

  const calculateTotal = (operation) => {
    setOutput(output + inputValue);
    setTransactions([...transactions, getTransaction(operation)]);
  };

  const calculateSubtract = (operation) => {
    setOutput(output - inputValue);
    if (output <= 0) {
      setOutput(0);
      notify();
    } else {
      setTransactions([...transactions, getTransaction(operation)]);
    }
  };
  return (
    <div
      style={{
        textAlign: "center",
        padding: 80,
        position: "absolute",
        left: 600,
        top: 50,
        backgroundColor: "blanchedalmond",
        border: "2px dashed black",
        borderRadius: 10,
      }}
    >
      <InputNumber
        style={{ position: "relative", top: -15 }}
        min={0}
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
          calculateTotal("Add");
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
          calculateSubtract("Remove");
        }}
      >
        Remove
      </Button>
      <br />
      <h1 style={{ position: "relative", top: 35 }}>Balance:{output}</h1>
      <br />
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
      <Transaction transaction={transactions} />
    </div>
  );
}
