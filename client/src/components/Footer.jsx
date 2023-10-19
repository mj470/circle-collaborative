import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <Container sx={{ fontWeight: 'bold', bgcolor: 'white', color: 'black', m:'auto', p:2, boxShadow: '0px 5px 15px rgba(0, 0, 0, 1)', textAlign: 'center'}}>
        <Typography variant="body2">
          © 2023{" "}
          <Link
            href="https://github.com/mj470/circle-collaborative"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            CircleCollective
          </Link>{" "}
          |{" "}
          <Link
            href="https://github.com/jakelipscomb"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            jakelipscomb
          </Link>{" "}
          |{" "}
          <Link
            href="https://github.com/cmdnguyen"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            cmdnguyen
          </Link>{" "}
          |{" "}
          <Link
            href="https://github.com/mj470"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            mj470
          </Link>{" "}
          |{" "}
          <Link
            href="https://github.com/robbi19"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            robbi19
          </Link>
        </Typography>
        <Typography variant="body2">All Rights Reserved.</Typography>
        <Grid
          container
          justifyContent="center"
          spacing={2}
          style={{ marginTop: "10px" }}
        >
          <Grid item>
            <Link
              href="https://github.com/mj470/circle-collaborative"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="https://www.linkedin.com/in/jake-lipscomb/"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="tel:+123456789" color="inherit">
              <PhoneIcon fontSize="large" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com/FallenZero_JL" color="inherit">
              <TwitterIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
