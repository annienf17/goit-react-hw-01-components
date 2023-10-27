import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionList({ type, amount, currency }) { 
        return ( 
          <tbody className={css.body}>
            <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
            </tr>
          </tbody>       
          );
    }
    
    TransactionList.propTypes={
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      };
      