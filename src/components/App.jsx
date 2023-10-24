// default import 
import { Profile } from 'components/Profile';
// named import 
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