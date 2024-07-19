import logo from './logo.svg';
import style from './styles/App.module.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
