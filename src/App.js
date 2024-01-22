import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Main from './Main';

function App() {
  return (
    <div className="App">
        <SideBar></SideBar>
        <NavBar></NavBar>
        <Main></Main>
    </div>
  );
}

export default App;