import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    },
    typography: {
        fontFamily: `'Exo 2', sans-serif`,
        button: {
            textTransform: 'none'
        }
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                ':focus': {
                    outline: 'none'
                },
                '::-moz-focus-inner': {
                    border: 0
                },
                body: {
                    overscrollBehaviorY: 'contain'
                }
            }
        },
        MuiButton: {
            containedSecondary: {
                color: '#fff'
            }
        }
    }
});

export default theme;
