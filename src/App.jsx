/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="APP">
      <LoadUsers></LoadUsers>
      <MyComponent brand = "apple" price="50000"></MyComponent>
      <MyComponent  brand ="mlicrosoft" price="1000"></MyComponent>
      <MyComponent brand ="google" price = "0"></MyComponent>
    </div>
  )
}


function LoadUsers(){

  const [users, setusers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setusers(data))
  },[])
  return(
    <div>
      <h1>Users Loaded:{users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h2>Name: {props.name}</h2>
      <p>call me baby!!:{props.phone} </p>
    </div>
  )
}
function MyComponent(props){
  
  const [points, setPoints] = useState(1)
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    padding:'10px',
    margin: '5px',
    borderRadius: '10px'
  }
  const handleAddpoints = () =>{
    const newPoints = points * 2;
    setPoints(newPoints);
  } 
  return(
    <div style={myStyle}>
      <h1>My own components: {props.brand}</h1>
      <h4>Asking money: {props.price},  I have Poinst: {points}</h4>
      <button onClick={handleAddpoints}>Add Points</button>
      <p style={{color: 'magenta', fontWeight:'bold'}}>I can write my component</p>
    </div>
  )
}

export default App;
