import './styles/index.sass'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {

  const {toggleTheme, theme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <button onClick={toggleTheme}>TOGGLE</button>
      {/*ToDo create css loader*/}
      <AppRouter/>
    </div>
  );
};

export default App;