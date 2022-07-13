
import './App.css';
import MovieApi from './Component/APICALL/MovieApi';
import Header from './Component/Header/Header';
// import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">

     <Header/>
          <MovieApi/>
     {/* <Home></Home> */}
    </div>
  );
}

export default App;
