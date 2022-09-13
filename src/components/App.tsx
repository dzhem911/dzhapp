import {Link, Route, Routes } from 'react-router-dom';
import '../index.sass'
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path={'/about'} element={<AboutPageAsync/>} />
        <Route path={'/'} element={<MainPageAsync/>} />
      </Routes>
    </div>
  );
};

export default App;