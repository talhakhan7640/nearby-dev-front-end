import './App.css'
import Register from './pages/Register';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="grid grid-cols-2">
        <div className="col-span-1"></div>
        <div className="main-home-section col-span-1">
          <h1 className="slogan text-white font-black text-5xl">
            A place where developers <br />
            meet to disscuss the future.
          </h1>
          <div className="home-page">
            <Register />
          </div>
         </div>
       </div> 
    </div>
  );
}

export default App;
