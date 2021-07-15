import React from "react";
import OverviewCurrentTradeItem from "./OverviewCurrentTradeItem.jsx";

const OverviewCurrentTrades = ({ overviewCurrentTrades, getAllTxns }) => {
  return (
    <div>
      {overviewCurrentTrades
        .filter((item) => (item.status = "pending"))
        .map((item) => (
          <OverviewCurrentTradeItem
            key={item.transactionId}
            item={item}
            getAllTxns={getAllTxns}
          />
        ))}
    </div>
  );
};

export default OverviewCurrentTrades;
