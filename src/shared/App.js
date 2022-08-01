import { Route } from 'react-router-dom';

//페이지
import Login from "../pages/Login"
import Copy from '../pages/Copy';
import Lecture from '../pages/Lecture';
import Main from '../pages/Main';
import RedirectURI from "../pages/RedirectURI"
import LectureTable from "../pages/LectureTable"
import Calender from "../pages/Calender"

const App = () => {
  return (
    <div className="App">
        <Route path="/login" exact component={Login} />  
        <Route path="/copy" exact component={Copy} />  
        <Route path="/main" exact component={Main} /> 
        <Route path="/oauth" exact component={RedirectURI} /> 
        <Route path="/lecture" exact component={Lecture} /> 
        <Route path="/lectureTable" exact component={LectureTable} /> 
        <Route path="/calender" exact component={Calender} /> 
    </div>
  );

}



export default App;