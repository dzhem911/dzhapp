import {Link, Route, Routes } from 'react-router-dom';
import './styles/index.sass'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {

  const {toggleTheme, theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      {/*ToDo create css loader*/}
      <AppRouter/>
    </div>
  );
};

export default App;