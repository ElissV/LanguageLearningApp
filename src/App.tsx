import styles from './App.module.scss';
import { Footer } from './Footer/Footer';
import Header from './Header/Header';
import Main from './pages/Main/Main';

function App() {
  return (
    <>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
}

export default App;
