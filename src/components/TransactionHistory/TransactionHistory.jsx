import {
  TransTable,
  TransTbody,
} from 'components/TransactionHistory/TransactionHistory.styled';

import { TransItem } from 'components/TransactionHistory/TransItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <TransTbody>
        <TransItem items={transactions} />
      </TransTbody>
    </TransTable>
  );
};
