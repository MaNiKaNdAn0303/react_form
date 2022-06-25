// import React from "react";
// import './css/main.css';
// import Create from './Components/create'
// import Erase from "./Components/erase";
// import Update from './Components/update';
// import positive from './image/positive.jpg';



// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
  


//   return (
//     <>
    
      
 
//             <div className="nav text-slate-300">
//    <h2 className="text-slate-300 title text-lg font-bold mt-20">CURD Operation</h2>


// <div className="mt-10"><img src={positive} style={{height:'150px', width:'auto'}}></img></div> 
//    <BrowserRouter>
//         <Routes>
//          <Route exact path='/create' element={<Create />}>Create</Route> 
//           <Route exact path='/erase' element={<Erase />}></Route>
//           <Route exact path='/update' element={<Update />}></Route>
//         </Routes>
//       </BrowserRouter>
//    </div>

//    </>

//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Components/main';


  function App() {
  return(
    <React.StrictMode>
    <Main  />   
  </React.StrictMode>
  )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
