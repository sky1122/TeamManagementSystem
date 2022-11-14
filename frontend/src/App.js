import './App.css';
import {Routes, Route} from "react-router-dom";

import Footer from './components/Footer';
import Nav from './components/Nav';
import TeamList from './components/TeamList';
import TeamMemberList from './components/TeamMemberList';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      {/* <TeamMemberList/> */}
      <Route path='/Team' element={<TeamList/>} />
      <Route path='Team/:TeamId' element={<TeamMemberList />} />
      {/* <AddTeamMember/> */}
      </Routes>
      <Footer />
    </div>
  );
}






export default App;
