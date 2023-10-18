import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput";
import { MessageLeft, MessageRight } from "./messageBubble";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    messagesBody: {
      width: "calc(100% - 20px)",
      margin: 10,
      overflowY: "scroll",
      height: "calc(100% - 80px)",
    },
  })
);

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <div id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="Hey how's it going?"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Robbin"
            avatarDisp={true}
          />
          <MessageRight
            message="going good, work is a pain. what's up with you?"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Jake"
            avatarDisp={false}
          />
          <MessageLeft
            message="Hey, I'm just getting on too. Saw you logged on, wanted to see what I missed."
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Maren"
            avatarDisp={true}
          />
          <MessageLeft
            message="you didn't miss much, trust me, drama is not for you bro."
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Catherine"
            avatarDisp={true}
          />
        </div>
        <TextInput />
      </Paper>
    </div>
  );
}
