import img1 from './assets/Omnifood.png'
import img2 from './assets/Pig-Game.png'
import img3 from './assets/bankist.png'
import img4 from './assets/bankist-website.png'
import img5 from './assets/CountryApi.png'
import img6 from './assets/Gueesing-game.png'

const header = {
  homepage: 'https://',
  title: 'RK',
}

const about = {
  name: 'Rawan Khaled',
  role: 'Software Engineer',
  description:
    ' A software engineer as well as a machine learning enthusiat',
  resume: 'https://resume.io/r/a451A2Xle',
  social: {
    linkedin: 'https://www.linkedin.com/in/rawan-salama-1692021b6',
    github: 'https://github.com/Rawan-Kh',
  },
}


const projects = [
  {
    img:img1,
    name: 'OmniFood website',
    description:
      'A healthy food app website design',
    stack: ['Html', 'Css', 'Javascript'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/1-Html-Css/projects/OmniFood-Project',
    livePreview: 'https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/1-Html-Css/projects/OmniFood-Project/',
  },
  {
    img:img2,
    name: 'Pig-Game',
    description:
      'A simple javascript game',
    stack: ['Html', 'Css', 'Javascript'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/2-Js/projects/PigGame/',
    livePreview: 'https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/2-Js/projects/PigGame/',
  },
    {
    img:img3,
    name: 'Bankist App',
    description:
      'A bank simulation app',
    stack: ['Html', 'Css', 'Js'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/2-Js/projects/BankistApp',
    livePreview: 'https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/2-Js/projects/BankistApp/',
  },
  {
    img:img4,
    name: 'Bankist website',
    description:
      'A website design with amazing functionalities',
    stack: ['Html', 'css', 'Javascript'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/2-Js/projects/BankistWebsite',
    livePreview: 'https://https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/2-Js/projects/BankistWebsite/',
  },{
    img:img5,
    name: 'Countries n Neighbours',
    description:
      'A fetching countries information and the neighbouring Api',
    stack: ['Html', 'Js', 'FetchApi'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/2-Js/projects/CountryApi',
    livePreview: 'https://https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/2-Js/projects/CountryApi/',
  },
  {
    img:img6,
    name: 'Guessing Game',
    description:
      'A simple js guessing game',
    stack: ['Html', 'css', 'Javascript'],
    sourceCode: 'https://github.com/Rawan-Kh/Kalbonyan-Elmarsos/tree/main/2-udemy/2-Js/projects/GuessingGame',
    livePreview: 'https://https://rawan-kh.github.io/Kalbonyan-Elmarsos/2-udemy/2-Js/projects/GuessingGame/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  email: 'rawanKHsalama@gmail.com',
}

export { header, about, projects, skills, contact }
