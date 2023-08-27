import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Project from './components/project';
import './components/main.css'

const data = {
  'logo': 'Prashant',
  'intro': `Hi \n I am Prashant Raj Bista.\nI am a Full Stack Web Developer.`,
  'about': `My name is Prashant Raj Bista. I am an engineering student studying at Thapathali Campus.
  I am pursuing  my Bachelor's degress in Electronics,Infromation and Communication Engineering. \nI am also a full stack  developer who uses python for backend and react for developing web applications.`,

  'projects': [{
    'title': 'Hey',
    'description': 'hello',
    'github': "https",
    'website': 'https'
  },
  {
    'title': 'He',
    'description': 'hell',
    'github': "http",
    'website': 'http'

  }
  ],
  'email': 'prashant.bista.18@gmail.com',
  'phone': '+977-9842503707'
}


function App() {
  return (
    <>
      <Header logo={data['logo']} intro={data['intro']} />
      <About about={data['about']} />
      <Project projects={data['projects']} />
      <Footer logo={data['logo']} email={data['email']} phone={data['phone']} />
    </>
  );
}

export default App;
