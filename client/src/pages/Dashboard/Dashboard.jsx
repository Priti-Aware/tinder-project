import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import ChatContainer from "../../components/ChatContainer/ChatContainer"
import "./Dashboard.css"
const characters = [
  {
    name: 'Monica Hall',
    url: 'https://plus.unsplash.com/premium_photo-1661391241762-72448ca5be31?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jared Dunn',
    url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://images.unsplash.com/photo-1618355776464-8666794d2520?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Richard Hendricks',
    url: 'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://images.unsplash.com/photo-1529470839332-78ad660a6a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fHww'
  },
]

const Dashboard = () => {
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  return (
    <div className="dashboard"> 
        <div className="swipe-container">
           <div className="card-container">
           {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
        
           </div> 
           <div className="swipe-info">
          {lastDirection? <p>You Swiped {lastDirection}</p>:<p/>}
        </div>
        </div>
        <ChatContainer/>
    </div>
  )
}

export default Dashboard
