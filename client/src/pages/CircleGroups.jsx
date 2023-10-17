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
  Collapse,
  Avatar,
  IconButton,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expanded }) => ({
  transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

const cardData = [
  {
    title: "BOSS RUSH: Help With Elden Ring",
    subheader: "created September 14, 2022",
    description:
      "Need help with a boss in Elden Ring? Look no further! This is a community of gamers who are here to help you with any boss in the game.",
    avatar: [
      <Avatar
        key="remy"
        alt="Remy Sharp"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0058eb5e3b83e122f477caf4e95aeb3ba58c734f.jpg"
      />,
      <Avatar
        key="travis"
        alt="Travis Howard"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/48/4865df7500d40a20f587232aedba042b66490365_full.jpg"
      />,
      <Avatar
        key="cindy"
        alt="Cindy Baker"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00026c8b473f3ae6a9ecb8ec8ef64277ff014fdd_full.jpg"
      />,
    ],
    image:
      "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
    rules: "No spoilers allowed.",
  },
  {
    title: "Chad Cooks Cooking Good Stuff",
    subheader: "created April 21, 2023",
    description:
      "A community for food lovers to discuss, discover, and share culinary delights from around the world. *Must have at least 1000 hours in the kitchen to join. No exceptions.",
    avatar: [
      <Avatar key="h" sx={{ bgcolor: red[700] }}>
        H
      </Avatar>,
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d4/d452c23d8d69c90acfd349ddc751bed6eaf0033e_full.jpg"
      />,
      <Avatar key="op" sx={{ bgcolor: red[200] }}>
        M
      </Avatar>,
    ],
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/60/60c3b4b8fdf4f2a52c6a245a86c6235cc37245fa_full.jpg",
    rules: "No pineapple on pizza allowed.",
  },
  {
    title: "Painting with Bob Ross",
    subheader: "created May 1, 2023",
    description:
      "Bob Ross fan appreciation club. Happy little trees, happy little clouds, and happy little accidents.",
    avatar: [
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/17/17ca7dd2e4d785704ec0a5110d6f5b78250fba21_full.jpg"
      />,
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/b7/b724cbb01115f23933278caa2b1b69607596e210_full.jpg"
      />,
      <Avatar key="op" sx={{ bgcolor: red[300] }}>
        X
      </Avatar>,
    ],
    image:
      "https://fivethirtyeight.com/wp-content/uploads/2014/04/bob-ross.jpg?w=575",
    rules: "No happy little accidents allowed.",
  },
  {
    title: "Anime Lovers",
    subheader: "created September 14, 2022",
    description:
      "A community for anime lovers to discuss, discover, and share their favorite anime shows and movies. You better be a fan of sub, dub lover need not apply~",
    avatar: [
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/94/9479354b60ec01e0b8c30e19a4de31db953a0f4d_full.jpg"
      />,
      <Avatar
        key="kevin"
        alt="Kevin Long"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00dbbb4f0c7f5258a3a0f5344c5f43d79cb7c9a3_full.jpg"
      />,
      <Avatar key="op" sx={{ bgcolor: red[900] }}>
        L
      </Avatar>,
    ],
    image:
      "https://img.asmedia.epimg.net/resizer/wxh6IMusogGgiagzmGNrRBSc9oI=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LTIVGUD6RZOQDDDTBEYXRUVATY.jpg",
    rules: "No weebs allowed.",
  },
  {
    title: "Music for the Soul",
    subheader: "created September 14, 2022",
    description:
      "A community for music lovers to discuss, discover, and share their favorite music. *Must have at least 1000 hours of listening to music to join. No exceptions.",
    avatar: [
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/a2/a284225d8a716565dfe1b17692baa72d8c06217c_full.jpg"
      />,
      <Avatar key="op" sx={{ bgcolor: red[100] }}>
        T
      </Avatar>,
      <Avatar
        key="eli"
        alt="Eli Montoya"
        src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/4e/4e532618d106c64fdcc67e054a4de16d94109f0f_full.jpg"
      />,
    ],
    image:
      "https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg",
    rules: "No country music allowed.",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              background: "#f0f0f0",
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
              title={card.title}
              subheader={card.subheader}
            />
            <CardMedia
              component="img"
              height="194"
              image={card.image}
              alt={card.alt}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expanded={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Members:</Typography>
                <Typography paragraph>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {card.avatar.map((avatar, avatarIndex) => (
                      <span key={avatarIndex}>{avatar}</span>
                    ))}
                  </div>
                </Typography>
                <Typography>Rules:</Typography>
                <Typography>{card.rules}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}
