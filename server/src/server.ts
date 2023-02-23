import Fastify from "fastify"
import { appRoutes } from './routes'
import cors from "@fastify/cors"

const app = Fastify()

app.register(appRoutes)
app.register(cors)

// port
app.listen({
  port: process.env.PORT as any | 3333
}).then(() => {
  console.log('http server is running')
})
