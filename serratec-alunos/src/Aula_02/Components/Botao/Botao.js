import BotaoEstilo from "./Styles";

const Botao = (props) => {
  const showMessage = () => {
    return alert("Clicou");
  };

  return (
    <BotaoEstilo //agora botao estilo funciona como um componente porem ja tem seu estilo
      onClick={showMessage}
    >
      {props.children}
    </BotaoEstilo>

    /*<button
     style={{ //tipo de css inline direto sem usar variavel
        backgroundColor: "red",
        color: "white",
        width: "200px",
        height: "50px",
      }}
      onClick={ShowMessage}
    >
      {props.children}
    </button>*/
  );
};
//como botao passou a ser um componente filho (pois ele nao fecha nele mesmo, ele tem um filho entre as duas tags de abrir e fechar) entao pode chamar ele pelo props children

export default Botao;
