import RepoContextProvider from './contexts/RepoContext';
import PageContextProvider from './contexts/PageContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <RepoContextProvider>
        <Header />
        <PageContextProvider>
          <Main />
          <Footer />
        </PageContextProvider>
      </RepoContextProvider>
    </>
  );
};

export default App;
