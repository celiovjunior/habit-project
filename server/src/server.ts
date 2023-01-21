import cors from '@fastify/cors'
import Fastify from "fastify"
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

// port
app.listen({
  port: process.env.PORT as any | 3333
}).then(() => {
  console.log('http server is running')
})
