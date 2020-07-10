import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Skills } from '../components/Skills';
import Typed from 'typed.js'
import { Contact } from '../components/Contact';


const getFontendSkills = () => (
  [
    {
      name: "JavaScript",
      logo: '/Javascript.svg',
      progress: 95
    },
    {
      name: "React",
      logo: '/React.svg',
      progress: 90
    },
    {
      name: "Nextjs",
      logo: '/nextjs.svg',
      progress: 70
    },
    {
      name: "Angular",
      logo: '/Angular.svg',
      progress: 60
    },
    {
      name: "Bootstrap",
      logo: '/Bootstrap.svg',
      progress: 90
    },
    {
      name: "Materialize",
      logo: '/materialize.svg',
      progress: 90
    },
    {
      name: "Bulma Css",
      logo: '/Bulma.svg',
      progress: 80
    },
  ]
)
const getBackendSkills = () => (
  [
    {
      name: "Nodejs",
      logo: '/Nodejs.svg',
      progress: 90
    },
    {
      name: "Express",
      logo: '/Expressjs.png',
      progress: 90
    },
    {
      name: "GraphQL",
      logo: '/GraphQL.svg',
      progress: 70
    },
    {
      name: "MongoDB",
      logo: '/mongodb.png',
      progress: 80
    },
    {
      name: "Firestore",
      logo: '/Firebase.svg',
      progress: 90
    },
    {
      name: "Json Web Token",
      logo: '/JWT.svg',
      progress: 90
    },
  ]
)
const getOthersSkills = () => (
  [
    {
      name: "Git",
      logo: '/Git.svg',
      progress: 80
    },
    {
      name: "Github",
      logo: '/github.svg',
      progress: 60
    },
    {
      name: "TypeScript",
      logo: '/typescript.svg',
      progress: 70
    },
    {
      name: "PeerJS",
      logo: '/webrtc.svg',
      progress: 90
    },
    {
      name: "ElectronJS",
      logo: '/Electronjs.svg',
      progress: 60
    },
    {
      name: "MomentJS",
      logo: '/momentjs.svg',
      progress: 70
    },
  ]
)


function App() {
  const [showHeader, setshowHeader] = useState(false)
  //const [browserHeight, setBrowserHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef(null)
  const textRef = useRef(null)

  const onScreem = (element, currentPos, cb) => {
    const top = element.current.offsetTop;
    const height = window.innerHeight;
    const heightElement = element.current.clientHeight;
    const diff = height * 0.75
    if (currentPos >= top - diff && currentPos <= top + heightElement + 300) {
      cb(true)
    } else {
      cb(false)
    }
  }

  useEffect(() => {
    const options = {
      /* strings: [` Hi, i'm Franklin <br/> I'm Full Stack Developer JavaScript`,
        "fdgaerghaerhezr fshrt"], */
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      shuffle: true
    };
    const typed = new Typed(textRef.current, options);
    window.addEventListener('scroll', () => {
      const currentPosition = window.scrollY
      //Mostrar o Ocultar Header
      if (currentPosition > 50) {
        setshowHeader(true)
      } else {
        setshowHeader(false)
      }
      //Verificar que el elemento sea visible
      onScreem(skillsRef, currentPosition, visible => {
        setIsVisible(visible)
      })

    })
    return () => {
      window.removeEventListener('scroll', () => {
        console.log('dsv')
      })
      typed.destroy()
    }
  }, [])
  return (
    <div >
      <Header showHeader={showHeader} />
      <section id="home" className="section1 d-flex align-items-center justify-content-center flex-column position-relative"  >
        <div id="text-typed">
          <div id="typed-strings">
            <p>Hi, i'm Franklin, nice to meet you 😉!!</p>
            <p>Hi, i'm <strong>Full Stack JavaScript Developer</strong> </p>
          </div>
          <span ref={textRef}></span>
        </div>

        <Button variant="outline-light" style={{ maxHeight: 50, bottom: 80 }} className="w-50 animate__animated animate__pulse animate__infinite position-absolute mx-auto " href="#contact">Contact me</Button>
      </section>
      <section id="skills" className="skills" ref={skillsRef}>
        <Container className="pt-5 ">
          <h1 className="text-center mb-5" style={{ color: "#3b3838" }} >Skills</h1>
          <Row >
            <Col md="6" lg="4" className="mb-3">
              <Skills className="d-flex flex-column h-100" tittle="Frontend" skillsArray={getFontendSkills()} on={isVisible} />
            </Col>
            <Col md="6" lg="4">
              <Skills className="d-flex flex-column h-100" tittle="Backend" skillsArray={getBackendSkills()} on={isVisible} />
            </Col>
            <Col md="6" lg="4">
              <Skills className="d-flex flex-column h-100" tittle="Others" skillsArray={getOthersSkills()} on={isVisible} />
            </Col>
          </Row>
        </Container>

      </section>
      <section id="contact" >
        <div className="contact d-flex align-items-center">
          <Container>
            <Row className="d-flex justify-content-center ">
              <Col xs="12" md="8" xl="6">
                <Contact />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default App;
