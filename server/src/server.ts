import Fastify from "fastify"
import { appRoutes } from './routes'
import cors from '@fastify/cors'

const app = Fastify()

app.register(appRoutes)
app.register(cors, {
  origin: '*'
})

// port
app.listen({
  port: 3333,
}).then(() => {
  console.log('http server is running')
})
