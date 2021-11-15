import "./Transaction";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, InputNumber } from "antd";
import Transaction from "./Transaction";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

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
      operation: operation
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

  const operationButton = (label, action) => {
    return (
      <Button
        className="operation-button"
        type="primary"
        onClick={() => {
          action(label);
        }}
      >
        {label}
      </Button>
    );
  };

  return (
    <div className="expense-tracker">
      <InputNumber
        className="input-box"
        min={0}
        value={inputValue}
        type="number"
        onChange={(value) => {
          setInputValue(parseInt(value));
        }}
      />
      <br />
      {operationButton("Add", calculateTotal)}
      {operationButton("Remove", calculateSubtract)}

      <br />
      <h1 className="balance-header">Balance:{output}</h1>
      <br />
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
      <Transaction transaction={transactions} />
    </div>
  );
}
