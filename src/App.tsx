import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/services':
        return <Services />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
}

export default App;