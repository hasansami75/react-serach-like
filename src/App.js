import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';
import MealDetail from './components/MealDetail/MealDetail';
import MealFinder from './MealFinder/MealFinder';

function App() {
  // const [likeColor, setLikeColor] = useState('');
  // const [users, setUsers] = useState([]);
  // const [singleUser, setSingleUser] = useState({});
  // const [randomUser, setRandomUser] = useState({});
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => setUsers(data))

  //   //singleUser
  //   fetch('https://jsonplaceholder.typicode.com/users/1')
  //     .then(res => res.json())
  //     .then(data => setSingleUser(data))

  //   //randomUser
  //   fetch('https://randomuser.me/api/')
  //     .then(res => res.json())
  //     .then(data => setRandomUser(data.results[0]))
  // }, [])


  // const handleLike = () => {
  //   setLikeColor(likeColor ? '' : 'primary');
  // }
  return (
    <div>
        <MealDetail></MealDetail>
        <MealFinder></MealFinder>





      {/* <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLike} color={likeColor}></ThumbUpAltIcon>
      <h1>Name:{singleUser.name}</h1>
      <h2>Random Gender = {randomUser.name?.first}</h2>
      {
        users.map(user => <li>{user.name}</li>)
      } */}
    </div>
  );
}

export default App;
