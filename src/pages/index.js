import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SuperSection from '../components/SuperSection'
import Services from '../components/Services'
import About from '../components/About'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'
import { AboutObj } from '../Data/Data.js'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />	
			<SuperSection isOpen={isOpen} />
			<About {...AboutObj}/>
			<Services />
			<Achievements />
			<Footer />
		</>
	)
}

export default Home
