import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendlist/FriendList';
import { TransactionHistory } from 'components/transactions/TransactionHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />   
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};