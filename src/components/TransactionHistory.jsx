import PropTypes from 'prop-types';
import { TransactionList } from './TransactionList';
import css from '../css/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
    const transactionList = items.map(item => (
        <TransactionList
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          key={item.id}
        />
      ));

      return (
          <table className={css['transaction-history']}>{transactionList}
            <thead className={css.head}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
            </thead>
          </table>  
      );
}

TransactionHistory.propTypes = {
items: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })
),
};





