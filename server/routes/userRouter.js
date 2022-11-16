import axios from 'axios'
import express from 'express'
import { handleDeleteUser, handleUpdateUser } from '../controllers/userController.js'

const router = express.Router()

router.delete(`/delete`, (req, res) => {
  handleDeleteUser(req, res)
})

router.patch(`/update`, (req, res) => {
  handleUpdateUser(req, res)
})

/////////////////////////
//REMOVE !!!!!!!
router.post(`/addRandomUser`, async (req, res) => {
  const randomUser = await (await axios.get('https://randomuser.me/api')).data.results[0]
  const professions = [
    'Devops',
    'Developer',
    'QA',
    'IT',
    'Data Analyst',
    'UI/UX',
    'Cyber Security',
  ]
  const profession = professions[randomNum(0, 6)]
  const trueFalse = [true, false]
  const company = trueFalse[randomNum(0, 1)]
  const techs =
    profession === 'Developer'
      ? [
          'c',
          'c++',
          'c#',
          'go',
          'java',
          'javascript',
          'typescript',
          'ruby',
          'rust',
          'vuejs',
          'react',
          'svelte',
          'bootstrap',
          'angular',
          'html',
          'css',
          'redux',
          'sass',
          'tailwind',
          'mui',
          'nodejs',
          'express',
          'spring',
          'graphql',
          'nestjs',
          'flask',
          'android',
          'react-native',
          'flutter',
          'tensorflow',
          'pytorch',
          'pandas',
          'mongodb',
          'mysql',
          'postgresql',
          'redis',
          'cassandra',
          'hive',
          '.net',
          'django',
          'electron',
          'rails',
        ]
      : profession === 'Devops'
      ? ['gcp', 'bash', 'aws', 'docker', 'jenkins', 'kubernetes', 'azure', 'firebase']
      : profession === 'QA'
      ? [
          'jest',
          'cypress',
          'selenium',
          'mocha',
          'puppeteer',
          'karma',
          'jasmine',
          'postman',
        ]
      : profession === 'UI/UX'
      ? ['photoshop', 'figma', 'xd', 'illustrator', 'blender']
      : [
          'c',
          'c++',
          `c#`,
          'go',
          'java',
          'javascript',
          'typescript',
          'ruby',
          'rust',
          'vuejs',
          'react',
          'svelte',
          'bootstrap',
          'angular',
          'html',
          'css',
          'redux',
          'sass',
          'tailwind',
          'mui',
          'nodejs',
          'express',
          'spring',
          'graphql',
          'nestjs',
          'flask',
          'android',
          'react-native',
          'flutter',
          'tensorflow',
          'pytorch',
          'pandas',
          'mongodb',
          'mysql',
          'postgresql',
          'redis',
          'cassandra',
          'hive',
          '.net',
          'django',
          'electron',
          'rails',
          'gcp',
          'bash',
          'aws',
          'docker',
          'jenkins',
          'kubernetes',
          'azure',
          'firebase',
          'jest',
          'cypress',
          'selenium',
          'mocha',
          'puppeteer',
          'karma',
          'jasmine',
          'postman',
        ]
  const tech = {}
  for (let i = 0; i < randomNum(1, 8); i++) {
    tech[techs[randomNum(0, techs.length - 1)]] = randomNum(1, 48)
  }
  const newUser = {
    name: randomUser.name.first + ' ' + randomUser.name.last,
    email: randomUser.email,
    password: randomUser.login.password,
    profession: profession,
    image: randomUser.picture.medium,
    about: company
      ? 'We are a software company that is growing every day and we look for out next talent'
      : "I'm a hard working talented employee that is looking for a new place to shine",
    links: ['https://www.linkedin.com/'],
    education: company
      ? []
      : [
          {
            location: randomUser.location.city,
            time: randomNum(1, 48),
            profession: profession,
            degree: trueFalse[randomNum(0, 1)],
          },
        ],
    experience: company
      ? []
      : [
          {
            location: randomUser.location.city,
            time: randomNum(1, 48),
            role: profession,
          },
        ],
    tech: tech,
    company: company
      ? { isCompany: company, lookingForDegree: trueFalse[randomNum(0, 1)] }
      : { isCompany: company },
  }
  const response = await axios.post('http://localhost:4000/auth/register', newUser)
  res.send(response.data)
})

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
//////////////////////////

export default router
