
import './App.css';
import HomeContainer from './Components/HomeContainer';
import NavBar from './Components/NavBar';
import Paths from './Components/Paths';
import {Route, Routes} from "react-router-dom";
import FlashCard from './Components/FlashCard';
import Mathematics from './Components/Mathematics';
import RelationFunction from './Components/RelationFunction';

function App() {
  return (
   <div className="">

    <NavBar />
    <Paths />
<Routes>
        <Route path="/" element={<FlashCard /> } />
        <Route path="/flashcard" element={<FlashCard /> } />
        <Route path="/mathematics" element={<Mathematics /> } />
        <Route path="/relation" element={<RelationFunction/> } />
    </Routes>

   </div>
  );
}

export default App;
