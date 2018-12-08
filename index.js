const Koa = require('koa');
const translate = require('xsampa');

const app = new Koa();

app.use(async ctx => {
  ctx.response.body = translate(ctx.request.query.q);
});

app.listen(3000);
