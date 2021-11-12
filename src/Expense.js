import { InputNumber } from "antd";
import { useState } from "react";
export default function Expense() {
  const [num1, setNum1] = useState(0);
  const [addValue, setAddValue] = useState("");
  const getTransaction = (operation) => {
    const transaction = {
      date: new Date(),
      input: { num1 },
      balance: { addValue },
      operation: operation,
    };
    return transaction;
  };

  const Add = () => {
    setAddValue(addValue + num1);
  };

  const remove = () => {
    setAddValue(addValue - num1);
  };
  return (
    <>
      <InputNumber
        value={num1}
        min="0"
        type="number"
        onChange={(value) => setNum1(parseInt(value))}
      />
      <br />
      <button onClick={() => Add()}>Add</button>
      <button onClick={() => remove()}>Remove</button>
      {addValue}
    </>
  );
}
