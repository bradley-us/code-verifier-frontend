import './App.css';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

// React Router DOM imports
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import HomePage from './pages/HomePage';
import KatasPage from './pages/KatasPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import KatasDetailPage from './pages/KatasDetailPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/katas'>Katas</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/katas' element={<KatasPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/kata/:id' element={<KatasDetailPage />}></Route>
          {/* Reditect when page not found */}
          <Route path='*' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
