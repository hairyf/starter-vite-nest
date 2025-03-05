import type { INestApplication } from '@nestjs/common'
import process from 'node:process'
import { Logger } from '@nestjs/common'
import chalk from 'chalk'

export function withNestjsListen(app: INestApplication, port: string | number) {
  const logger = new Logger()

  app.listen(port).then(() => {
    logger.log(`${chalk.bold('Listening on:')} ${chalk.gray(`http://127.0.0.1:${port}`)}`)
    logger.log(`${chalk.bold('Swaggier URL:')} ${chalk.gray(`http://127.0.0.1:${port}/swagger/website`)}`)
    process.env.NODE_ENV
    && logger.log(`${chalk.bold('Environments:')} ${chalk.gray(process.env.NODE_ENV)}`)
  })
}
