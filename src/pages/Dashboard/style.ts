import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        dashboard: {
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column'
        },
        container: {
            flex: 1
        }
    })
);

export default useStyles;
