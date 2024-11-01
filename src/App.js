import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./home";
import Register from "./auth/register";
import Login from "./auth/login";
import CreateTask from "./component/task/CreateTask";
import ListTask from "./component/task/ListTask";

function App() {
  return (
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/list-task" element={<ListTask/>} />
                  <Route path="/create-task" element={<CreateTask />} />
              </Routes>
          </Router>
  );
}

export default App;



