// import logo from './logo.svg';
import './App.css';
import Login from './screen/Login';
import SignUp from './screen/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Profile from './screen/Profile';

function App() {
  return (
    // <div className="App">
      // <header className="App-header">
         <BrowserRouter>
          <Routes>
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile />}   />
              <Route path='/' element={<Login />}   />
          </Routes>
        {/* <SignUp /> */}
       </BrowserRouter> 
      // </header>
    // </div>
  );
}

export default App;
