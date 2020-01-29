import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center"
  },
});

export default function CardProduct(props){
  

  const classes = useStyles();

  return (
    <>
    {props.products.map(product => (
        <Card className={classes.card} key={product.id}>

          <CardActionArea>
        
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://cdn.ome.lt/_1KF0rLSFPxVwCR-u5XA6Mc-k4E=/1200x630/smart/extras/conteudos/goku3.jpg"
              title
              ="Contemplative Reptile"
            />
            <CardContent>
        
              <Typography gutterBottom variant="h6" component="h2">
                {product.nome}
              </Typography>
        
              <Typography gutterBottom variant="h4" component="h2">
                {product.preco}
              </Typography>
        
              <Typography variant="body2" color="textSecondary" component="p">
                {product.categoria}
              </Typography>
        
            </CardContent>
        
        </CardActionArea>
      
        <CardActions>
        
          <Button size="small" color="primary">
            Editar
          </Button>
        
          <Button size="small" color="primary">
            Excluir
          </Button>
        
        </CardActions>
      
      </Card>
    ))}
  
   </>
  )
}