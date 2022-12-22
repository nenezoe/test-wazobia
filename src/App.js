import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignUp from './screens/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import SignIn from './screens/SignIn/SignIn';
import Dashboard from './screens/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
