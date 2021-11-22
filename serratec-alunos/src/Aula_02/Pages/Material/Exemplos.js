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
import TextoNegrito from '../../Components/TextoNegrito';

const Exemplos = () => {
  const alunos = [
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
  ];
  return (
    <Container maxWidth="md">
      <Box sx={{display: "flex", justifyContent: "center", flex: 1, backgroundColor: "Red"}}>
        <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
          <Table aria-label="caption table">
            {/*se quiser alguma legenda na tabela<caption>A basic table example with a caption</caption>*/}
            <TableHead>
              <TableRow>
                <TableCell align="right"><TextoNegrito>Nome</TextoNegrito></TableCell>
                <TableCell align="right"><TextoNegrito>Idade</TextoNegrito></TableCell>
                <TableCell align="right"><TextoNegrito>Cidade</TextoNegrito></TableCell>
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
      </Box>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Container>
  );
};

export default Exemplos;
