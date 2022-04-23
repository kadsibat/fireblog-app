import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppContext from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Toastify from '../helpers/toast';

const CardBlok=({item})=> {

  const {user} =useContext(AppContext)


  const navigate = useNavigate();
    const content = (item.content).slice(0,100) + "...";


    return (
      <Card sx={{ maxWidth: 345}}     onClick={
        () =>
          user
            ? navigate(`/detail/${item.id}`,{state:{item}} )
            : Toastify("Please log in to see details")
      
      }>
        <CardActionArea >
          <CardMedia
            component="img"
            height="200"
            image={item.imageUrl}
            alt="green iguana"
          />
          <CardContent sx={{backgroundColor:"#FAFDD6"}}>
         
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {item.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {(item.content.length) > 100 ? (content) : (item.content) }
            </Typography>
          </CardContent>

        </CardActionArea>
        <Typography variant="body2" color="text.secondary" sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",gap:"10px",marginBottom:"2rem"}}
>
        <AccountCircleIcon/> {item.user}
            </Typography>
            <Typography sx={{display:"flex",justifyContent:"flex-start", alignItems:"center",gap:"10px",marginBottom:"2rem"}}
>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
        </Typography>
      </Card>
    );
  }

  export default CardBlok;