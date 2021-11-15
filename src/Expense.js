import "./Transaction";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, InputNumber } from "antd";
import Transaction from "./Transaction";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

export default function ExpenseCalcuator() {
  const [currencyExpense, setCurrencyExpense] = useState(0);
  const [currencyBalance, setCurrencyBalance] = useState(currencyExpense);
  const [currencyTransactions, setCurrencyTransactions] = useState([]);

  const showNegativeWarning = () => toast("Balance is zero.");
  const transactionDateFormat = "YYYY-MM-DDTHH:mm:ss";

  const getTransaction = (operation) => {
    return {
      transaction_at: moment(new Date()).format(transactionDateFormat),
      expense: currencyExpense,
      operation: operation
    };
  };

  const calculateCredit = (operation) => {
    setCurrencyBalance(currencyBalance + currencyExpense);
    setCurrencyTransactions([
      ...currencyTransactions,
      getTransaction(operation)
    ]);
  };

  const calculateDebit = (operation) => {
    setCurrencyBalance(currencyBalance - currencyExpense);
    if (currencyBalance <= 0) {
      setCurrencyBalance(0);
      showNegativeWarning();
    } else {
      setCurrencyTransactions([
        ...currencyTransactions,
        getTransaction(operation)
      ]);
    }
  };

  const transactionButton = (label, action) => {
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
        value={currencyExpense}
        type="number"
        onChange={(value) => {
          setCurrencyExpense(parseInt(value));
        }}
      />
      <br />
      {transactionButton("Add", calculateCredit)}
      {transactionButton("Remove", calculateDebit)}

      <br />
      <h1 className="balance-header">Balance:{currencyBalance}</h1>
      <br />
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
      <Transaction currencyTransactions={currencyTransactions} />
    </div>
  );
}
