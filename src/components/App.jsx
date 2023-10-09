import { Profile } from 'components/Profile';
import user from '../json/user.json';


export const App = () => {
  return (
    <div>
      <Profile user={user} />    
    </div>
  );
};