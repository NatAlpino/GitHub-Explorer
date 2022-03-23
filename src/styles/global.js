import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5;   
        -webkit-font-smoothing: antialiased; //deixa a fonte mais definida, porém funciona somente no chrome.
    }

    body, input, button {
        font: 16px Josefin Sans, sans-serif;  
    }

    #root {
        max-width: 900px;//usando o max pra se no caso diminuir a tela de visualização as imagens não ficarem distorcidas
        margin: 0 auto; //pra centralizar
        padding: 40px 20px; //os 20px para a direita e para a esquerda é pra quando diminuir a tela os elemntos nunca encostarem na borda, sempre manterem uma margem.
    }

    button {
        cursor: pointer;
    }
`;
