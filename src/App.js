import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Fruits from './Fruits';
import FruitsCounter from './FruitsCounter';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Contact from './Contact';
import Rp from 'react-player/youtube';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  //State lifting then prop drilling
  const [fruits] = useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'apple', id: 2},
    {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<div><h1>Where should the state go?</h1>
              <Fruits fruits={fruits}/>
              <FruitsCounter fruits={fruits}/></div>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        
        <div>
          <Rp url='https://www.youtube.com/shorts/cBio_XL8Yms' />
          <Rp url='https://www.youtube.com/watch?v=G-wjEQx8WnI' controls={true} />
          <video src='https://www.youtube.com/watch?v=G-wjEQx8WnI' controls/> 
          {/* This doesnot work because video html can't handle videos from streaming medias while ReactPlayer can handle all!  */}
        </div>
      <Footer/>
    </div>
  );
}

// function App() {
//   //focus Input
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }

// function App() {
//   function handleClick(){
//     let randomNum=Math.floor(Math.random()*3)+1;
//     console.log(randomNum);
//     let ui=prompt('type a number')
//     alert(`Computer: ${randomNum}, Yours: ${ui}`)
//   }
  
//   return (
//     <div>
//       <h1>
//         <button onClick={handleClick} >Guess the number between 1 and 3.</button>
//       </h1>
//     </div>
//   );
// }

export default App;
