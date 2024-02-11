import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/Homepage/HomePage';
import { CreatePage } from './components/CreatePage/CreatePage';
import { UpdatePage } from './components/UpdatePage/Update';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='create' element={<CreatePage />}/>
      <Route path='/update/:id' element={<UpdatePage />}/>
     </Routes>
    </div>
  );
}

export default App;
