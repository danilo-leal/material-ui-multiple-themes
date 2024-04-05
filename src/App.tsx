import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

export default function ImgMediaCard() {
  return (
    <Box
      sx={{
        p: 6,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "hsla(0, 0%, 0%, .05)",
      }}
    >
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 360 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=4672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              Share
            </Button>
            <Button variant="outlined" size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </ThemeProvider>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=4672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 360 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://images.unsplash.com/photo-1711972495282-5e6d32c97ac1?q=80&w=4672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
