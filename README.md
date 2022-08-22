
# CapiGalery-API

API feita usando nodejs com typescript para a aplicação CapiGalery.


## Authors

- [Bruno Barbosa](https://github.com/Bruno-bhab)


## Get Started
O projeto usa nodejs, portanto é nescessário instalar as dependências. Para faze-lo use o comando:
```
npm install
```
ou
```
yarn install
```


É preciso um banco de dados para rodar a aplicação. A api faz uso do orm prisma, o que torna a criação de um novo banco uma tarefa fácil.
No repositório do projeto contem um arquivo .env.exemple com instruções de como colocar os dados do seu banco e após configurar ele é preciso rodar o comando: 
```
npm prisma migrate dev
```
ou
```
yarn prisma migrate dev
```

Para rodar o projeto basta ultilizar o comando:

```
npm run dev
```
ou
```
yarn dev
```


