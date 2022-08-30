// import logo from './logo.svg';
import './App.css';

// routes
import Router from './routes';

// theme
import ThemeProvider from './theme';

import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <ThemeProvider>
      <UserAuthContextProvider>
        <Router />
      </UserAuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
