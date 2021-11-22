import styled from "styled-components";

export const FormWrapper = styled.div` //fica em volta do form, como um envolocro
    display: flex;
    justify-content: center;
`;
export const Form = styled.form` //estilo do form
    background-color: #D6C9E3;
    max-width: 90%;
    text-align: center;
    padding: 30px;
`;

const handleInputBgColor = isActive => {
    switch (isActive) {
        case true:
            return "green";

        case false:
            return "red";

        case undefined:
            return "#c2c2c2";
    }
}

export const Input = styled.input` //estilo do imput
    width: 250px;
    height: 50px;
    margin: 5px;

    border: 3px solid ${({isActive}) => handleInputBgColor(isActive)}
`;

export const Button = styled.button` //estilo do imput
    background-color: blueviolet;
    color: white;
    width: 100px;
    height: 50px;
    margin: 5px;
`;