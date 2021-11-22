//exemplo de botao utilizando a forma antiga fazendo classe
import React from 'react';
import './BotaoClass.css';

class BotaoClasse extends React.Component {
    showMessage = ()=> {
        alert("clicou");
    };

    render() {
        return (
            <button className="botaoClass" /*aqui usando css como arquivo css normal*/
                onClick={this.showMessage}
            >
                {this.props.children}
            </button>  
        );
    }
}

export default BotaoClasse;