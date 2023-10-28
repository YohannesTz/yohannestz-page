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
import Technologies from './components/Technologies';
import websiteConfig from '../public/webConfig.json';

function App() {

	return (
		<div className="App container mx-auto">
			<NavigationBar />
			<Fade direction='up' damping={0.2} triggerOnce>
				<MiddleText data={websiteConfig.topText} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Education data={websiteConfig.educations} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Certifications data={websiteConfig.certifications} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Experience data={websiteConfig.experience} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Technologies />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Projects data={websiteConfig.projects} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Blogs data={websiteConfig.blogs_writing} />
			</Fade>
			<Fade direction='up' damping={0.2} triggerOnce>
				<Testimonials data={websiteConfig.testimonials} />
			</Fade>
			<MyFooter />
		</div>
	)
}

export default App
