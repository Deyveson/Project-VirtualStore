import React, {useEffect, useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import api from '../../services/api';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginTop: 20,
    marginLeft: 10,
    alignItems: "center"
  }
});

export default function CardProduct(props){

  const [products, setProducts] = useState([]);

  async function getProduct() {
    const response = await api.get('store/findAllProduct');
    setProducts(response.data);
  }

  useEffect(() => {
    
    getProduct();

  },[]);

  async function deleteProduct(value){

    await api.delete(`/store/${value}`);

    alert("Produto Excluido");

    getProduct()

  }

  const classes = useStyles();

  return (

    <div className="produtos">

    {products.map(product => (

      <Card className={classes.card} key={product.id}>

        <CardActionArea>

          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://images.squarespace-cdn.com/content/v1/507ff40ae4b0f60e9fd2d711/1490912569405-MDM6X2SO85K51GO9QSB8/ke17ZwdGBToddI8pDm48kODjntF7MuZE19Ts0J_5xFpZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVECqsSeSkgOmAJQd4k7HqLEr0HrSgd1U_jtyGYnlZ7YMJu3E9Ef3XsXP1C_826c-iU/image-asset.png"
            title
            ="Contemplative Reptile"
          />

          <CardContent>

            <Typography gutterBottom variant="h6" component="h2">
              {product.nome}
            </Typography>

            <Typography className="preco" gutterBottom variant="h4" component="h2">
              R$: {product.preco}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Categoria: {product.categoria}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              Estoque: {product.quantidade}
            </Typography>

          </CardContent>

        </CardActionArea>

        <CardActions>
        
          <Button size="small" color="primary">
            
            <NavLink to={{pathname: '/add', state: product}}> 
                Editar
            </NavLink>
          </Button>

          <Button 
            size="small" 
            color="primary"
            type="submit"
            onClick={e=> deleteProduct(product.id)
            }>
            Excluir
          </Button>

        </CardActions>

      </Card>
    ))}
  
   </div>
  )
}