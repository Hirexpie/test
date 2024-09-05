import Header from './Components/Header';
import { Route, Routes } from 'react-router';
import Login from './Routs/Login'
import Main from './Routs/Main';
import MyPage from './Routs/MyPage';
import Register from './Routs/Register'
import { observer } from 'mobx-react-lite';
import PrivateRout from './Routs/PrivateRout';

function App() {
  
  return (
    <div className="App">
      <Header/> 
      <Routes>
        <Route element={<PrivateRout/>}>
          <Route path='/myPage' element={<MyPage/>}/>
        </Route>
        
          <Route path='/Login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
        <Route path='/' element={<Main/>} />

      </Routes>


    </div>
  );
}

export default observer(App);
