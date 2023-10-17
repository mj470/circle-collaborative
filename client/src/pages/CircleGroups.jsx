import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import circle1Image from "../assets/images/circle1.png";
import circle2Image from "../assets/images/circle2.png";
import circle3Image from "../assets/images/circle3.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Projects() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 150000 }}
      preloadImages={false}
      lazy={true}
    >
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
        <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle1Image}
            title="Mock Restaurant"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test1
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions sx={{ mx: 'auto', width: 275 }}>
            <Button size="small" position="center" href='https://github.com/jakelipscomb/mock-restaurant'>
              GitHub Repository
            </Button>
            <Button size="small" position="center" href='https://mock-restaurant-9eb3720005cf.herokuapp.com/'>
              Live Demo
            </Button>
          </CardActions>
        </Card>
      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle2Image}
            title="J.A.T.E. Text Editor"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test2
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/mock-restaurant'>GitHub Repository</Button>
            <Button size="small" href='https://github.com/jakelipscomb/mock-restaurant'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle3Image}
            title="Wheels of Date Night"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/wheels-of-date-night-project-1'>GitHub Repository</Button>
            <Button size="small" href='https://esbev.github.io/project-1-collab/'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle1Image}
            title="Weather Forecast"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test 4
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/weather-dashboard'>GitHub Repository</Button>
            <Button size="small" href='https://jakelipscomb.github.io/weather-dashboard/'>Live Demo</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle2Image}
            title="Note Taker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test 5
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/note-taker'>GitHub Repository</Button>
            <Button size="small" href='https://jakelipscomb-note-taker-0f34dac376d0.herokuapp.com/'>Live Demo</Button>
            <Button size="small" href='https://www.youtube.com/watch?v=xKw0yk2zAt8'>YouTube Tutorial</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
      <SwiperSlide sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400, width: '100%', background: '#f0f0f0' }}>
      <Card sx={{ maxWidth: '100vh', m: 5, mx: 'auto' }}>
          <CardMedia
            sx={{ height: 400 }}
            image={circle3Image}
            title="Employee Tracker"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Test 6
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Non vitae modi aut. Dolorum quidem aut accusamus fugiat, reprehenderit maiores amet enim! 
                Quaerat commodi ab perferendis nemo enim? Ipsam, accusantium tempore!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jakelipscomb/employee_tracker'>GitHub Repository</Button>
            <Button size="small" href='https://www.youtube.com/watch?v=MV7hX06sJKQ'>Live Demo on YouTube</Button>
          </CardActions>
        </Card>

      </SwiperSlide>
    </Swiper>
  );
}
