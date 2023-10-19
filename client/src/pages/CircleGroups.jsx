import { useState } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
  TextField,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ADD_GROUP } from "../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_GROUPS } from "../utils/queries";
import { useTheme } from "@mui/material/styles";

import Auth from "../utils/auth";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperSlides = [
  {
    key: 1,
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-8c5879751a0ff8aae625dcfbb199a61f",
    title: "BootCamp Grads",
    description:
      "A community of bootcamp graduates who are looking for their first job in the tech industry. Share your experiences and tips here.",
    githubLink: "",
    demoLink: "",
  },
  {
    key: 2,
    image:
      "https://images-platform.99static.com/ROc_T-C-z7AXEf4L-HO8DpIy7Jo=/0x0:1086x1086/500x500/top/smart/99designs-contests-attachments/72/72063/attachment_72063237",
    title: "Tech Titans Unite",
    description:
      "A community of tech enthusiasts sharing knowledge and innovations. *Must have at least a RTX 3090 or better to join. No exceptions.",
    githubLink: "",
    demoLink: "",
  },
  {
    key: 3,
    image:
      "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/v1652717561/images2/program_content/nHahASXmgudycGeHMT2ga2u60W3u2IBId12BXi5f.jpg",
    title: "Adventure Seekers Club",
    description:
      "For those who crave thrill and love exploring the great outdoors. Share your adventures here.",
    githubLink: "",
    demoLink: "",
  },
  {
    key: 4,
    image:
      "https://kicking-carbs.com/wp-content/uploads/2020/05/SQ-keto-onion-rings-H.jpg",
    title: "The Fellowship of the Onion Ring",
    description:
      "A place for food lovers to discuss, discover, and share culinary delights from around the world.",
    githubLink: "",
    demoLink: "",
  },
  {
    key: 5,
    image:
      "https://wemakemoviesonweekendsdotcom.files.wordpress.com/2016/09/here-another-mars-attacks.jpg?w=1200",
    title: "Dead Movie Buffs Society",
    description:
      "Lights, camera, action! A community for film aficionados to discuss niche, hidden gems in movies and cinema.",
    githubLink: "",
    demoLink: "",
  },
  {
    key: 6,
    image:
      "https://imgb.ifunny.co/images/02e4ba9ecad883f1b97f2198838cd1603081c16814d52257d7463d8fbe29e11d_1.jpg",
    title: "Itsumi Mario",
    description:
      "A community for gamers to discuss the latest and greatest in the gaming industry. *Must have at least 1000 hours in Mario Kart to join. No exceptions.",
    githubLink: "",
    demoLink: "",
  },

  // Add more objects for additional slides
];

export default function Projects() {
  const [formData, setFormData] = useState({
    groupName: "",
    groupDescription: "",
    image: "",
  })
  const [addGroup, { error }] = useMutation(ADD_GROUP)
  const { loading, data } = useQuery(QUERY_GROUPS, {
    pollInterval: 200,
  })
  
  const cardData = data?.allGroups || []

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      console.log(formData);
      const { data } = addGroup({
        variables: { ...formData },
      });
     console.log(data);

    }catch (err) {
      console.error(err)
    }
    
    setFormData({
      groupName: "",
      groupDescription: "",
      image: "",
    })
  }

  const theme = useTheme();

  return (
    <div>
      <Swiper
        id="your-unique-id"
        navigation
        pagination
        autoplay={{ delay: 3000 }}
        className="your-swiper-class"
      >
        {swiperSlides.map((slide) => (
          <SwiperSlide
            key={slide.key}
            className="swiper-slide"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 400,
              width: "100%",
              background: 'linear-gradient(225deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)',
            }}
          >
            <Card sx={{ maxWidth: "100vh", m: 5, mx: "auto" }}>
              <CardMedia
                sx={{ height: 400 }}
                image={slide.image}
                title={slide.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {slide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {slide.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={slide.githubLink}>
                  Add to Favorites
                </Button>
                <Button size="small" href={slide.demoLink}>
                  Share
                </Button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(345px, 1fr))",
       gap: "20px", justifyContent: "center", alignItems: "center",}}>
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.groupName}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.groupDescription}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Create New Group
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="New Group"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Group Description"
            name="groupDescription"
            value={formData.groupDescription}
            onChange={handleChange}
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            label="Image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}
