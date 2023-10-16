import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => // Pass the theme as an argument
  createStyles({
    wrapForm: {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText: {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);

export const TextInput = () => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="Test Test Test"
                    className={classes.wrapText}
                    //margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    <SendIcon />
                </Button>
            </form>
        </>
    )
}
