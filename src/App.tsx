import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './libs/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Dashboard />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
