import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        filter: {
            paddingTop: `${theme.spacing(2)}px`,
            paddingLeft: `${theme.spacing(2)}px`,
            paddingRight: `${theme.spacing(2)}px`,
            background: theme.palette.grey[50],
            boxSizing: 'border-box'
        },
        searchButton: {
            display: 'flex',
            alignItems: 'center',
            height: '100%'
        }
    })
);

export default useStyles;
