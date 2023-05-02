import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NoPage from './components/NoPage';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

  <Login />

  <BrowserRouter>
<Routes>
<Route path="/">
<Route index element={<Home/>}></Route>
<Route path="*" element={<NoPage />} />

  </Route>
</Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
