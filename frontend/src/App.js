import './App.css';
import {Routes, Route} from "react-router-dom";

import Footer from './components/Footer';
import Nav from './components/Nav';
import TeamList from './components/TeamList';
import TeamMemberList from './components/TeamMemberList';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Team' element={<TeamList/>} />
      <Route path='Team/:TeamId' element={<TeamMemberList />} />

      </Routes>
      <Footer />
    </div>
  );
}






export default App;
