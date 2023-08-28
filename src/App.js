import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Project from './components/project';
import Skill from './components/skills';
import './components/main.css'

const data = {
  'logo': 'Prashant',
  'intro': `Hi \n I am Prashant Raj Bista.\nI am a Full Stack Web Developer.`,
  'about': `My name is Prashant Raj Bista. I am an engineering student studying at Thapathali Campus.
  I am pursuing  my Bachelor's degress in Electronics,Infromation and Communication Engineering. \nI am also a full stack  developer who uses python for backend and react for developing web applications.`,

  'projects': [{
    'title': 'Getintoto',
    'description': 'Getintoto is a blog based website created using Django.This website was created to write blog when we were in college.',
    'website': 'https://www.getintoto.com'
  },
  {
    'title': 'ChaiyoPaiyo',
    'description': 'ChaiyoPaiyo is a service-directory based website. This website (in future) will contain the data about the services availbale in the country.',
    'website': 'https://www.chaiyopaiyo.com'

  },
  {
    'title': 'College WebApp',
    'description': `We are working on a team project for maintaing the web application. 
    For Frontend we are using Next.js and for backend we are using Django.`,
    'website': 'https://www.tcioe.edu.np'

  }
  ],
  'email': 'prashant.bista.18@gmail.com',
  'phone': '+977-9842503707',
  'linkedin': 'https://www.linkedin.com/in/prashant-raj-bista-1324831b8/',
  'github': 'https://github.com/Strange18',
  'skill': ['FrontEnd Development',
    'Backend Development',
    'FullStack Development',
    'Content Writting',
    'Server Management']
}


function App() {
  return (
    <>
      <Header logo={data['logo']} intro={data['intro']} />
      <About about={data['about']} />
      <Project projects={data['projects']} />
      <Skill data={data['skill']} />
      <Footer logo={data['logo']} email={data['email']} phone={data['phone']} github={data['github']} linkedin={data['linkedin']} />
    </>
  );
}

export default App;
