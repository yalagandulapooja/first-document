
import './App.css';
//import FunctionEx from './comonents/functionex';
//import FunEx2 from './comonents/funEx2';
//import Funex3 from './comonents/funex3';
//import Moviecomp from './comonents/moviecomp';
//import ClassEx from './comonents/ClassEx';
//import StateEx from './comonents/StateEx';
//import StateEx2 from './comonents/StateEx2';
//import StateEmployee from './comonents/StateEmployee';
//import Conditionalrend from './comonents/conditionalrend';
//import ListEx from './comonents/ListEx';
//import ListEx1 from './comonents/ListEx1';
//import StyleEx from './comonents/StyleEx';
//import { Button } from "react-bootstrap";
//import CounterEx from './comonents/CounterEx';
//import UserData from './comonents/UserData';
//import DeleteStudent from './comonents/DeleteStudent';
//import AddStudent from './comonents/AddStudent';
//import BasicGet from './comonents/BasicGet';
//import WillUnmount from './comonents/WillUnmount';
//import UpdateLifeCycle from './comonents/UpdateLifeCycle';
import Header from './comonents/Header/Header';
import Routing from './Routing';
import Footer from './comonents/Footer/Footer';
//import LifeCycleEx from './comonents/LifeCycleEx';
//import DeleteStudentFun from './comonents/DeleteStudentFun';
//import StudentDataFunEx from './comonents/studentDataFunEx';
//import AddStudentFun from './comonents/AddStudentFun';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"; 


function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;

//{<Header /> <Routing /> <Footer /> <LifeCycleEx /> <DeleteStudent /> <AddStudentFun /> <StudentDataFunEx />}