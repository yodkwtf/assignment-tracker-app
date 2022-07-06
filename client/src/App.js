import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing, Register, Login, Dashboard, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link className="btn" to="/">
          Home
        </Link>
        <Link className="btn" to="/register">
          Register
        </Link>
        <Link className="btn" to="/login">
          Login
        </Link>
        <Link className="btn" to="/dashboard">
          Dashboard
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
