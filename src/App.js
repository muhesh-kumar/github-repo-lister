import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import RepoContextProvider from './contexts/RepoContext';

const App = () => {
  return (
    <>
      <RepoContextProvider>
        <Header />
        <Main />
        <Footer />
      </RepoContextProvider>
    </>
  );
};

export default App;
