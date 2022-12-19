import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';


import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';

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
      // const { username, tag, location, avatar, stats } = user;
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
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

      Hello Pandora!!!
    </div>
  );
};
