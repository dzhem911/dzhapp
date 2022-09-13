import {Link, Route, Routes } from 'react-router-dom';
import '../index.sass'
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {Suspense} from "react";

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      {/*ToDo create css loader*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>} />
            <Route path={'/'} element={<MainPageAsync/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;