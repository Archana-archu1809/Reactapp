export default function Transaction({ currencyTransactions }) {
  return (
    <div className="transactions">
      <h1>Transaction</h1>
      {currencyTransactions.map((transaction) => (
        <li>
          {transaction.transaction_at}-{transaction.expense}-
          {transaction.operation}
        </li>
      ))}
    </div>
  );
}
