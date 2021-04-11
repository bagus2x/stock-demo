import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sidebar: {
            padding: theme.spacing(0),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRight: `1px solid ${theme.palette.grey[300]}`,
            width: 180
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            padding: `${theme.spacing(2)}px 0`,
            '& > *': {
                marginBottom: theme.spacing(4)
            }
        },
        shrink: {
            width: 'unset !important'
        }
    })
);

export default useStyles;
