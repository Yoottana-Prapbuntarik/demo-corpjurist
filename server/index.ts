import express from 'express'
import next from 'next'
import nextI18next from '../i18n'
import nextI18NextMiddleware from 'next-i18next/middleware'
import { IncomingMessage, ServerResponse } from 'http'

const port = process.env.PORT || 8080
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

async function printError (error: string) {
  console.log(error)
}

(async () => {
  await app.prepare()
  const server = express()

  try {
    server.use(nextI18NextMiddleware(nextI18next))
  } catch (e) {
    printError(e)
    throw e
  }

  server.get('*', (req: IncomingMessage, res: ServerResponse) => handle(req, res))

  server.listen(port)
})()

export default undefined
