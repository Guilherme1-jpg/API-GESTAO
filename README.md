# Event management

Aplicativo criado para o gerenciamento de compra e venda de ingressos, onde a compra do cliente é a nossa importancia.

## tools used

- Redis command line
- VScode
- Docker desktop
- Dbeaver
- Insomnia

## running the project

- Node.js v12+ or Docker and Docker Compose
- Postgres running on local instance or Docker
- Install dependencies - `npm install`
- Run project - `npm run start-dev`
- Docker running docker-compose up

## libraries used

The following is a list of the libraries used during development

- [Celebrate](https://www.npmjs.com/package/celebrate) - middleware de validação!
- [Joi](https://joi.dev/api/?v=17.6.0) - middleware de validação que compoe o celebrate!
- [Express](https://expressjs.com/pt-br/) fornece um conjunto de recursos para aplicativos web
- [TypeORM](https://typeorm.io/)- Mapea dados entre os ambientes
- [Tsyringe](https://github.com/microsoft/tsyringe) - Tratar questões de injeção de dependencia, feito pela microsoft
- [Jest](https://jestjs.io/pt-BR/) - framework para testes em JS.
- [Redis](https://redis.io/) - banco noSQL para tratamento de cache na aplicação
- [Rate-limiter](https://github.com/animir/node-rate-limiter-flexible) - Limita requests do usuario na aplicação para evitar DDos
