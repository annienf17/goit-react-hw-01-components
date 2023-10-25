// default import 
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';


export const App = () => {
  return (
    <div>
      <Profile user={user} />   
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} />;
    </div>
  );
};