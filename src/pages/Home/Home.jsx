import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Container } from '@material-ui/core';



function AppRouter() {
  
  return(
  <Container style={{width:'100%',height:'100%'}}>
  <div style={{marginTop:230, marginLeft:475,width:'80%',height:'80%'}}>    
    <Button style={{marginBottom:10}} variant="contained" color="primary" href={'/register'}>
    <AddIcon />
    Cadastrar
  </Button>  
  <br/>
  <Button variant="contained" color="primary" href={'/Listar'}>
    <AddIcon />
    Listar Usuários
  </Button>
  </div>
  </Container>

  )
   
}
 export default AppRouter;