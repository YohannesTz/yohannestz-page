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

const websiteConfig = {
	stacks: [
		"Android",
		"Web",
		"Backend"
	],
	personalIntroOne: "Hi, Yohannes here, a computer science student who constantly seeks out innovative solutions to everyday problems. I have been writing programs that do simple tasks since I was 17. In those years, I've honed my analytical thinking and collaboration skills, and I love working with a team. I love collaborating and making connections.",
	personalIntroTwo: "I am always open to chatting about tech startups, and I would love for you to connect with me. Please feel free to message me if you want work done. Skills: Java, Android, React, Flutter, and Kotlin. Open to: remote jobs and internships",
	personalSkills: "Java, Android, React, Flutter and kotlin.",
	openTo: "Remote jobs and internships",
	resumeLink: "https://drive.google.com/file/d/121H6hNMGXWx6UUgDBo0-564j7VsbJjH3/view?usp=share_link",
	educations: [
		{
			schoolName: "Microlink IT College",
			time: "2021 - 2024",
			type: "Bsc - Computer Science",
			description: "Learned stuff.",
		},
		{
			schoolName: "Dejazmach Wondirad Preparatory School",
			time: "2018 - 2020",
			type: "Highschool Diploma - Natual Sciences",
			description: "Learned stuff.",
		},
	],
	certifications: [
		{
			title: "Google African Developers Scholarship - Android Development",
			issueDate: "Issued on May 2022",
			description: "Learned Stuff...",
			link: "https://adscerts.com/scholar/7FBBCC49E3BA672"
		},
		{
			title: "Tech Camp Ethiopia - Full-stack web Development",
			issueDate: "Issued on Jun 2021",
			description: "Learned Stuff...",
			link: "https://drive.google.com/file/d/1w9k9cI3vI62Y3qoHilAmP75g7sZZRC7B/view?usp=sharing"
		},
		{
			title: "Udacity - Java Nano Degree",
			issueDate: "Issued on Jun 2021",
			description: "Learned stuff",
			link: "https://confirm.udacity.com/GG9NUUKN",
		}
	],
	experience: [
		{
			title: "Software Developer Intern",
			company: "KurazTech",
			time: "Aug 2023 - present"
		},
		{
			title: "Freelance Android Developer",
			company: "Upwork",
			time: "Sep 2022 - Oct 2022",
		},
		{
			title: "Volunteer Fullstack web developer",
			company: "ENADB - Ethiopian National Assosiation of the Deafblind",
			time: "Nov 2021 - 2022"
		},
		{
			title: "Talent Pool member as Junior",
			company: "GebebyaTalent",
			time: "Sep 2021 - 2022"
		}
	],
	
	projects: [
		{
			name: "Okami",
			link: "https://github.com/YohannesTz/Okami",
			description: "An Android app that uses the kitsu api to let users explore anime and manga.",
			mdName: "okami.md"
		},
		{
			name: "Pikslate",
			link: "https://github.com/YohannesTz/Pikslate",
			description: "An Android app that uses the kitsu api to let users explore anime and manga.",
			mdName: "pikslate.md"
		},
	]
};

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
				<Technologies />
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
