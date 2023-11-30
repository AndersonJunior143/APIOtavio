import { Prisma, PrismaClient } from '@prisma/client'
import AlunoServices from './services/AlunoServices'
import GrupoServices from './services/GrupoServices'
import ProfessorServices from './services/ProfessorServices'
import AvaliacaoServices from './services/AvaliacaoServices'

const prisma = new PrismaClient()

async function main() {
    await AlunoServices.createAluno(
        {
            email: 'pedro@gpail.com',
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
    await GrupoServices.createGrupo(
      {
        nome: "MixEat",
        lider:{
          connect:{
            matricula: "1"
          }
        }
      }
    )
    await GrupoServices.createGrupo(
      {
        nome: "TSWeek",
        lider:{
          connect:{
            matricula: "2"
          }
        }
      }
    )
    await GrupoServices.createGrupo(
      {
        nome: "JáChegou?",
        lider:{
          connect:{
            matricula: "3"
          }
      }
    }
    )
    await ProfessorServices.createProfessor(
      {
          email: 'otavio@lube.com',
          matricula: '1',
          nome: 'Otávio',
      }
  )
    await ProfessorServices.createProfessor(
      {
          email: 'saulo@gmail.com',
          matricula: '2',
          nome: 'Saulo',
      }
  )
    await ProfessorServices.createProfessor(
      {
          email: 'heraclito@gmail.com',
          matricula: '3',
          nome: 'Heráclito',
      }
  )
    await AvaliacaoServices.createAvaliacao(
      {
        avaliador: "Otávio",
        avaliadorProf: {
          connect: {
              matricula: "1"
          }
        },
        avaliacaoGrupo: {
          connect: {
            nome: "MixEat"
          }
        },
        nota: 0.0,
        avaliadorAluno:{
          connect: {
            matricula: "1"
          }
        },

      }
      )
      await AvaliacaoServices.createAvaliacao(
        {
          avaliador: "Saulo",
          avaliadorProf: {
            connect: {
                matricula: "2"
            }
          },
          avaliacaoGrupo: {
            connect: {
              nome: "TSWeek"
            }
          },
          nota: 10.0,
          avaliadorAluno:{
            connect: {
              matricula: "2"
            }
          },
  
        }
        )          
        await AvaliacaoServices.createAvaliacao(
          {
            avaliador: "Heráclito",
            avaliadorProf: {
              connect: {
                  matricula: "3"
              }
            },
            avaliacaoGrupo: {
              connect: {
                nome: "JáChegou?"
              }
            },
            nota: 100.0,
            avaliadorAluno:{
              connect: {
                matricula: "3"
              }
            },
    
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