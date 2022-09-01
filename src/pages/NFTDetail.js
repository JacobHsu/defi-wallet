import { useLocation } from 'react-router';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function NFTDetail() {
  const { state } = useLocation();
  const { title, img, company, info } = state.item;

  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '80vw',
          mb: '10px',
        }}
      >
        <Card sx={{ mb: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />

          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button size="small">Send</Button>
            <Button size="small">Sell</Button>
          </CardActions>
        </Card>
        <Typography gutterBottom variant="body1" component="div">
          Description
        </Typography>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              by {company}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              {info}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
