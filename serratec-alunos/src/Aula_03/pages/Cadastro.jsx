import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';

const Cadastro = () => {
    const [nome, setNome] = useState(); //aqui criamos um estado chamado nome, eh como se fosse um get e set no java
  return (
      <>
    <Box sx={{margin: '15px'}}>
      <TextField id="standard-basic" label="Standard" variant="standard" 
      onChange={(e) => setNome(e.target.value)}/>
    </Box>

    {nome}
    </>
  );
};

export default Cadastro;
