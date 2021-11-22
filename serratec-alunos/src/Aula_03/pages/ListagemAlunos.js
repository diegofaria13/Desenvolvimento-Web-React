import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
 
const ListagemAlunos = () => {
   /* const alunosQueVemDaApi = [
      {
        nome: "Diego",
        idade: 33,
        cidade: "Cordeiro",
      },
      {
        nome: "Andreza",
        idade: 26,
        cidade: "Cantagalo",
      },
      {
        nome: "Fulano",
        idade: "21",
        cidade: "Lugar Nenhum",
      },
    ]; exemplo sem usar o axios para consultar uma api, foi criado um array */
    


    const [alunos, setAlunos] = useState([]); //criado estado alunos
    const [clicou, setClicou] = useState(0); //criado estado clicou com um valor zero para toda hora que executar a a;'ao la em baixo ele mudar de valor

    useEffect(() => { //o use effect espera uma fun;'ao como retorno
      axios.get("https://secret-headland-69654.herokuapp.com/alunos")
      .then(response => {  //vai pegar o get desse endereco de api.
        setAlunos(response.data); //quando criar o compoente, seta os status dos alunos criando os alunos.
      //quando nao usa axios no lugar do response.data eh alunosQueVemDaApi 
      })
      
      
    }, []); //essa ultima patrte eh em qual efeito vai usar, o efeito fica dentro dos [] se estiver vazio eh pq vai executar somente quando estiver criando esse componente.

    useEffect(() =>{
        if(clicou !== 0)
        alert('O usuário clicou no botão')
        //obs, ele ja entra direto aparecendo o alert pq quando cria ele entende que ja eh uma altera;'ao do valor padrao ai cria o if p ele s[o aparecer o alert se clicou for diferente de zero]


    }, [clicou]); //vai ficar "vigiando" esse estado clicou que foi criado la no bot'ao, assim que for alterado ele vai executar a a;'ao dentro do useeffect
    
    return (
    <>
      <TableContainer sx={{ maxWidth: 650 }} component={Paper} >
        <Table aria-label="caption table">
          {/*se quiser alguma legenda na tabela<caption>A basic table example with a caption</caption>*/}
          <TableHead>
            <TableRow>
              <TableCell align="right">
                Nome
              </TableCell>
              <TableCell align="right">
                Idade
              </TableCell>
              <TableCell align="right">
                Cidade
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {alunos.map((aluno) => (
              <TableRow key={aluno.nome}>
                <TableCell align="right">{aluno.nome}</TableCell>
                <TableCell align="right">{aluno.idade}</TableCell>
                <TableCell align="right">{aluno.cidade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => {setClicou(clicou+1)} } variant="contained">Disparar Efeito</Button>
    </>
  );
};

export default ListagemAlunos;
