import VeChungToi from "./Page/VeChungToi/VeChungToi";
import DinhHuong from "./Page/DinhHuong/DinhHuong";
import UngTuyenPage from "./Page/UngTuyen/UngTuyenPage";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VeChungToi />} />
        <Route path="/dinhhuong" element={<DinhHuong />} />
        <Route path="/ungtuyen" element={<UngTuyenPage />} />
        <Route path="/Commingsoon" element={<DinhHuong />} />
      </Routes>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

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
//           rel="noopener noreferre`r"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
