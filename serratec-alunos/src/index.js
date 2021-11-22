import React from 'react'; //com essa importação ele ja entende que é um código react. importação para usar a biblioteca do react, quando nao colocamos o caminho relativ ele sabe que é pra importar do node modules
import ReactDOM from 'react-dom'; //onde manipular o dom como se fosse o htm, vai injetar componentes react no nosso html
import './index.css'; // importando css
import { BrowserRouter, useRoutes } from "react-router-dom";
//import App from './Aula_02/App'; // componente app, dentro do app que esta a ´programação da página
import ListagemAlunos from './Aula_03/pages/ListagemAlunos';
import Exemplos from './Aula_02/Pages/Material/Exemplos';
import NavBar from './components/NavBar';
import Cadastro from './Aula_03/pages/Cadastro';

const Routes = () => { //aqui criamos uma função que vai conter as rotas do nosso app
  const routes = useRoutes([// o use routes vai conter o arrai com todas as rotas
    {path: "/", element: <ListagemAlunos />}, //aqui ele entende que quando estiver no ; vai estar na listagem de alunos
    {path: "/aula_02", element: <Exemplos />}, //aqui, quando estiver em /Aula_02 ele vai saber que estara em exemplos
    {path: "/cadastro", element: <Cadastro />}
  ]);

  return routes;
}

ReactDOM.render(
  <BrowserRouter>
    <NavBar /> {/*fica aqui pq tudo que renderizado, antes de qualquer rota vai vir o navbar em cima*/}
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')  //aqui o vai pegar o codigo react acima e vai ser renderizado entro da div root
);
