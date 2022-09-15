import {Link, Route, Routes } from 'react-router-dom';
import './styles/index.sass'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Suspense, useContext} from "react";
import {useTheme} from "./theme/useTheme";

const App = () => {

  const {toggleTheme, theme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
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