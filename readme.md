![Eplus](https://www.agenciaeplus.com.br/wp-content/themes/eplus/images/agencia-eplus-n-logo.png)

# E-Plus Frontend Challenge

Seja bem-vindo ao E-Plus Front-end Challenge, considere este o primeiro passo para fazer parte de uma das melhores equipes de ecommerce e marketing digital do Brasil!

Para completar o desafio com sucesso você precisará codificar o layout que segue no projeto, para isso será necessário consumir um json via xhttp que retornará uma lista de produtos na resposta do request e servirá para alimentar/manipular o mini-cart.

Então mãos a obra e bom challenge ;)

## Design

- O topo apresentado deve seguir o [seguinte design](https://projects.invisionapp.com/share/NARHXUS6HCF#/357617423_Eplus)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, nos conte tudo que fez! Se fez o desafio utilizando pré-processadores, por exemplo, pois usaremos estas informações para avaliá-lo. 
- O ideal é que este challenge leve até 8h.
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com rodrigo.freitas@agenciaeplus.com.br ou nadia@agenciaeplus.com.br

## Dicas

- Os ícones usados, são todos do Material Design. https://material.io/icons/
- A fonte utilizada é Montserrat (Está fonte se encontra no google fonts). 
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte. 

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Fidelidade ao design proposto
- Adaptação mobile

## Instruções de Uso

**Node.js**
- É necessário ter instalado Node.js a partir da versão 8+
- Para iniciar o servidor execute o comando na pasta raiz:
`node server/app.js`
- Para parar o servidor execute o comando no terminal:
`Ctrl + C`

**Uso com Docker**
- É necessário ter instalado Docker a partir da versão 18+ e docker-compose 1.23+
- Para iniciar o servidor execute o comando na pasta raiz:
`docker-compose up -d --build`
- Para parar o servidor execute o comando na pasta raiz:
`docker-compose down`

Com o servidor rodando já estamos prontos para testar nossa app, abra o arquivo `index.html` no seu navegador.

**Tecnologias Utilizadas**
- Para facilitar a montagem do ambiente foi utilizado Docker.
- Foi criado um servidor http Node.js utilizando o framework Express.
- HTML e CSS.
- Javascript sem nenhuma biblioteca.

**Funcionalidades**
- Mini-cart dropdown
- Consumo do JSON via fetch
- Manipulação do mini-cart com os dados do JSON
- Antes de cada request, limpa os items do mini-cart
- Calcula o valor total dos produtos do mini-cart




