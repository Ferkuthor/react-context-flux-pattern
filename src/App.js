import logo from './logo.svg';
import './App.css';

// Context
import AppProvider from "./context/AppProvider";

// Components
import Search from "./components/Search/Search";
import TaskList from "./components/Todo/TaskList";
import Add from "./components/Todo/Add";




function App() {
  return (
    <div className="App">

      <header className="App-header">

        <p>
          Logo
        </p>

        <p>Menu 1</p>
        <p>Menu 2</p>
        <p>Menu 3</p>
        <p>Menu 4</p>
        <p>Menu 5</p>

      </header>





      <AppProvider>
        <Search />

        <TaskList />

        <Add />
      </AppProvider>



      <footer className="App-footer">
        <p>
          Logo
        </p>

        <p>Menu 1</p>
        <p>Menu 2</p>
        <p>Menu 3</p>
        <p>Menu 4</p>
        <p>Menu 5</p>
      </footer>

    </div>
  );
}

export default App;
