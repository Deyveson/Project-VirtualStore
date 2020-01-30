import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { Button } from '@material-ui/core';

import api from '../../services/api';
import './styles.scss';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    }
}));

export default function FormProduct(props){
    

    const param = props.location.state;
  
    const [nome, setNome] = useState(param ? param.nome : '');
    const [categoria, setCategoria] = useState(param ? param.categoria: '');
    const [preco, setPreco] = useState(param ? param.preco : 0);
    const [quantidade, setQuantidade] = useState(param ? param.quantidade : 0);
    
    const classes = useStyles();

    async function handleSubmit(e){

        e.preventDefault();

        //const product = {id, nome, categoria, preco, quantidade};
        //await api.post('store/create', product);
       
        const product = {nome, categoria, preco, quantidade};
        await api.post('store/create', product);

        setNome('');
        setCategoria('');
        setPreco('');
        setQuantidade('');
        alert("Cadastrado com Sucesso")
    }

    return (
        
        <div className="formulario">
           
            <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="on">

                <TextField
                    required
                    name="nome"
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    value={nome}
                    onChange={e=> setNome(e.target.value)}
                />

                <TextField 
                    label="Categoria"
                    id="categoria"
                    name="categoria"
                    variant="outlined"
                    value={(categoria)}
                    onChange={e=> setCategoria(e.target.value)}
                />
                <TextField 
                    id="preco" 
                    label="Preco" 
                    name="preco"
                    variant="outlined" 
                    value={preco}
                    onChange={e=> setPreco(e.target.value)}
                />
                <TextField 
                    id="quantidade" 
                    name="quantidade"
                    label="Quantidade" 
                    variant="outlined"
                    value={quantidade}
                    onChange={e=> setQuantidade(e.target.value)} 
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    className={classes.button}
                    startIcon={<SaveIcon />}>
                        Save
                </Button>

            </form>

        </div>

    );
}