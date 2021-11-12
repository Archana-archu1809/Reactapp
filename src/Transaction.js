export default function Transaction({ transaction }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 350,
        left: 60,

        textAlign: "center",
        padding: "5px",
        backgroundColor: "blanchedalmond",
        border: "2px dashed black",
        borderRadius: 10,
      }}
    >
      <h1>Transaction</h1>
      {transaction.map((transaction) => (
        <li>
          {transaction.date}-{transaction.input}-{transaction.operation}
        </li>
      ))}
    </div>
  );
}
