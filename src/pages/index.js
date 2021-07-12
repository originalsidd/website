import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SuperSection from '../components/SuperSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import About from '../components/About'
import {
	// homeObjOne,
	homeObjThree,
} from '../components/InfoSection/Data'
import {AboutObj} from '../Data/Data.js'

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />	
			<SuperSection />
			{/* <InfoSection {...homeObjOne}/> */}
			<About {...AboutObj}/>
			<Services />
			<InfoSection {...homeObjThree}/>
			<Footer />
		</>
	)
}

export default Home
