import { Button, Link, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';

export const NFTCard = ({ item }) => {
  const navigate = useNavigate();
  const { id, title, img, company, price, inCart } = item;
  console.log(12222, img);
  return (
    <Card
      sx={{ maxWidth: 200, m: 1 }}
      onClick={() => {
        navigate('/detail', { state: { item: item } });
      }}
    >
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {company}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">{price}</Button> */}
        <Typography
          variant="subtitle2"
          mt={1}
          sx={{ width: '100%', textAlign: 'right' }}
        >
          price&nbsp;&nbsp;
          <span>&euro;{price}</span>
        </Typography>
      </CardActions>
    </Card>
    // <Grid item xs={12} sm={6} lg={4} xl={3}>
    //   <Paper
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       paddingTop: 16,
    //       margin: 16,
    //     }}
    //   >
    //     <Link to="/details" style={{ margin: '0 auto', maxHeight: 200 }}>
    //       <img src={img} alt="product" style={{ maxWidth: 200 }} />
    //     </Link>
    //     <Typography
    //       style={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         padding: '3px 16px',
    //       }}
    //     >
    //       {title}
    //     </Typography>
    // <Typography
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     padding: '3px 16px',
    //   }}
    // >
    //   price&nbsp;&nbsp;
    //   <span>&euro;{price}</span>
    // </Typography>
    //     <Button
    //       variant="contained"
    //       color="secondary"
    //       disabled={inCart ? true : false}
    //       onClick={() => {
    //         // value.addToCart(id);
    //       }}
    //     >
    //       {inCart ? (
    //         <span disabled>in cart</span>
    //       ) : (
    //         <span style={{ display: 'flex' }}>
    //            add to cart
    //         </span>
    //       )}
    //     </Button>
    //   </Paper>
    // </Grid>
  );
};
