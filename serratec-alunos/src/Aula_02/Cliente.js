import Botao from './Components/Botao/Botao';
import BotaoClasse from './BotaoClasse';

const Cliente = ({nome /*se usar o props vem tudo ai tem que separar o que pegar*/}) => {
  //obs: Todo retorno de um elemento do react precisa estar dentro de um so elemento (No caso abaixo temos o H1 e o p), seja html ou fragmente (que eh uma taga vazia).
  const divStyle = { //tipo de css inline atribuindo variavel usando codigo js
    backgroundColor: "chocolate", 
    fontSize: "20px",
    border: "3px solid black",
    margin: "15px"
  }

  return (
    <div style={divStyle}>
      <h1>Dados do Cliente</h1>
      <p>Nome: {nome /*se fosse props la em cima ia usar props.nome, ou props.idade se tivesse idade la no atributo list tbm*/}</p>
      
      <Botao>Cadastrar</Botao>
      <Botao>Editar</Botao>
      <BotaoClasse>Deletar</BotaoClasse>
    </div>
  );
};
//botao eh filho pq ele tem o cadastratr entre as duas tags de abrir e fechar
//para nao ser um filho ele tem que fechar nele mesmo ex <botao /> ai seria so um componente sem filho
export default Cliente;
