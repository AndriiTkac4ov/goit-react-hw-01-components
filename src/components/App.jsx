import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from '../path/to/transactions.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics
        stats={data}
      />
      
      <FriendList
        friends={friends}
      />
      
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};
