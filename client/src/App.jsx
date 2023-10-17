import Nav from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Paper from '@mui/material/Paper';
import Header from './components/Header';
import { blue, orange } from '@mui/material/colors';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const theme = createTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: blue[700],
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Paper elevation={0} sx={{ height: '100vh' }}>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
      </Paper>
    </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
