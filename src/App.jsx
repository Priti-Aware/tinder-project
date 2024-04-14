import './App.css'
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChatContainer from "./components/ChatContainer/ChatContainer"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/onboarding" element={<OnBoarding/>}/>
        <Route path="/chat" element={<ChatContainer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
