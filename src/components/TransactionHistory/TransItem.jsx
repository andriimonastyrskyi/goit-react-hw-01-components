import PropTypes from 'prop-types';

export const TransItem = ({ items }) => {
  return items.map(transaction => {
    return (
      <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
    );
  });
};

TransItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
