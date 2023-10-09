import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import user from '../json/user.json';
import data from '../json/data.json';


export const App = () => {
  return (
    <div>
      <Profile user={user} />   
      <Statistics title="Upload stats" stats={data} /> 
    </div>
 
    
   
  );
};