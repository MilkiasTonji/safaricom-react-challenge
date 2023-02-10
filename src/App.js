
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import PageNotFoundPage from './components/PageNotFoundPage';
import UserDetail from './components/users/UserDetail';
import Users from './components/users/Users';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="*" element={<PageNotFoundPage />} />
      <Route exact path='/users/:id' element={<UserDetail />}></Route>     
      <Route exact path='/users' element={<Users />}></Route>     
      </Routes>
    </Router>
  );
}

export default App;
