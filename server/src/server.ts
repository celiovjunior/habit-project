import Fastify from 'fastify';

const app = Fastify()

app.get('/', () => {
  return 'hello oie!'
})

app.listen({
  port: 3333
}).then(() => {
  console.log('http server is running')
})