import Form from "./component/Form"
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Router from "./component/Router";




export default function App() {
  return (<div>
    <BrowserRouter>
      <Router>
      </Router>
    </BrowserRouter>
  </div>)
}