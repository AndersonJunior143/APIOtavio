import { PrismaClient } from '@prisma/client'
import AlunoServices from './services/AlunoServices'

const prisma = new PrismaClient()

async function main() {
    await AlunoServices.createAluno(
        {
            email: 'pedro@gmail.com',
            matricula: '1',
            nomeAluno: 'Pedro',
        }
    )
    await AlunoServices.createAluno(
      {
          email: 'caina@gmail.com',
          matricula: '2',
          nomeAluno: 'Cainã',
      }
  )
    await AlunoServices.createAluno(
      {
          email: 'brayan@gmail.com',
          matricula: '3',
          nomeAluno: 'Brayan',
      }
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })