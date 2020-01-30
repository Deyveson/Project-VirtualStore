# Project-VirtualStore
- Projeto loja virtual usando tecnologias atuais, Back-end com SpringBoot(Java), 
Front-end em ReactJS, usei o yarn para gerenciar as dependencias, Material-UI como framework de estilização de componentes, SASS para as folhas de estilos.

## Tecnologias e bibliotecas nescessarias para execução dos projetos.
- Maven 
- Docker-compose
- React
- Yarn

## Tecnologias usadas
- Spring Boot
- ReactJs
- Material UI
- Swagger 
- H2
- SASS

## Installation and run
1. Clone this repository: `git clone https://github.com/Deyveson/Project-VirtualStore`
2. `cd` into the `back-end` folder and run the following commands:
3. Run App `mvn spring-boot:run` or download SprinTool https://spring.io/tools
5. Open your browser and see the server back-end running on `http://localhost:8080/virtual-store/api/swagger-ui.html`.
6. `cd` into the `front-end` folder and run the following commands:
7. `yarn install`
8. `yarn start`

## BANCO DE DADOS - H2

- http://localhost:8080/virtual-store/api/h2-console

- Click em connect, nao precisa de senha e as tabelas são criadas automaticamente.

## Back-End SringBoot for Swagger

- http://localhost:8080/virtual-store/api/swagger-ui.html

ROUTES: 
1. `POST /store/create` - Salvar Produto
2. `PUT /store/{id}` - Alterar Produto 
3. `DELETE /store/{id}` - Deletar Produto
4. `GET /store/findAllProduct` - Lista Produtos

## Front-END React

ROUTES:

- http://localhost:3000/ - Catalogo de ProdutoS
- http://localhost:3000/add - Adicionar Produtos 


## Install with docker-compose (Shell): 
1. cd `Project-VirtualStore`
2. `docker-compose up -d`


