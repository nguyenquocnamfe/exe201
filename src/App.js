import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InfoUser from './page/User/InfoUser/InfoUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InfoUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
