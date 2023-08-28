import './App.css'
import { NavigationBar } from './components/Navbar'
import { MiddleText } from './components/Middletext';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { MyFooter } from './components/MyFooter';
import { Projects } from './components/Projects';
import { Fade } from 'react-awesome-reveal';
import { Testimonials } from './components/Testimonials';
import { Blogs } from './components/Blogs';

function App() {

	return (
		<div className="App container mx-auto">
			<NavigationBar />
			<Fade direction='up' damping={0.2} triggerOnce>
				<MiddleText />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Education />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Certifications />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Experience />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Projects />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Blogs />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Testimonials />
			</Fade>
			<MyFooter />
		</div>
	)
}

export default App
