import { color } from '../Global/global'
import Icon1 from '../images/img1.png'
import Icon2 from '../images/img2.png'
import Icon3 from '../images/img3.png'
import Icon4 from '../images/img4.png'
import Icon5 from '../images/img5.png'
import Icon6 from '../images/img6.png'

export const AboutObj = {
	id: "about",
	headline1: "About Me",
	headline2: "Skills",
	headline3: "Education",
	description: "A Creative Thinker in the world of Computer Science who	loves to dive deep into the ocean of algorithms and	trending technologies. Believer of realistic vision and like to transform every challenge into an opportunity.	Love to work in collaborative team environments that	lead to an effective solution in an optimal way.",
	descriptionEd: "Areas of Interest: MERN Stack Development, Competitive Programming, Cloud Computing, AI and ML",
	img: require('../images/siddwebcut.jpg').default,
	alt: "My personal Pic",
	SKILLS1: [
		{
			"type": "Python",
			"level": 95,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "C++",
			"level": 90,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "C",
			"level": 90,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "Java",
			"level": 75,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "HTML",
			"level": 85,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "CSS",
			"level": 75,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		}
	],
	SKILLS2: [
		{
			"type": "Javascript",
			"level": 85,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "React",
			"level": 85,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "Redux",
			"level": 75,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "Node.js",
			"level": 80,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "SQL",
			"level": 95,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		},
		{
			"type": "Git",
			"level": 85,
			"color": {
				"bar": color.first,
				"title": {
					"background": color.second
				}
			}
		}
	],
	timelineElements: [
		{
			id: 1,
			title: "Vellore Institute of Technology",
			location: "Vellore, India",
			description: "B. Tech Computer Science",
			date: "September 2020 - Present",
			contentStyle: {
				background: color.second,
				color: "#fff"
			},
			contentArrowStyle: {
				borderRight: `7px solid ${color.second}`
			},
			iconStyle: {
				background: color.second,
				color: color.first
			},
		},
		{
			id: 2,
			title: "Mira Model School",
			location: "Delhi, India",
			description: "Senior Secondary - PCM with Computer Science",
			date: "April 2018 - April 2020",
			contentStyle: {
				background: color.first,
				color: "#fff"
			},
			iconStyle: {
				background: color.first,
				color: color.second
			},
			contentArrowStyle: {
				borderRight: `7px solid ${color.first}`
			}

		},
		{
			id: 3,
			title: "Mira Model School",
			location: "Delhi, India",
			description: "Secondary - with Computer Science",
			date: "April 2008 - April 2018",
			contentStyle: {
				background: color.second,
				color: "#fff"
			},
			contentArrowStyle: {
				borderRight: `7px solid ${color.second}`
			},
			iconStyle: {
				background: color.second,
				color: color.first
			},
		}
	]
}

export const ProjectsObj = [
	{
		icon: Icon1,
		link: "https://github.com/originalsidd/smart-brain",
		title: "Smart-Brain",
		desc: "Smart Brain is an SPA which can detect a face in a user entered image with sign-in/register functionality. Created using Javascript with React on Front- end and Node.js with Express.js in Back - end using real time database hosted on Heroku written in PostgreSQL."
	},
	{
		icon: Icon2,
		link: "https://github.com/originalsidd/Result-Analyzer",
		title: "Result-Analyzer",
		desc: "Result Analyzer is a python program which can calculate average result, toppers, passers, failures, distinctions etc. for the CBSE Class 12th Board Exams. Created using python with matplotlib and connected to MySQL database in the back-end. Part of my class 12th practical project."
	},
	{
		icon: Icon3,
		link: "https://github.com/originalsidd/Pokedex",
		title: "Pokedex",
		desc: "Pokedex was my first dive into the world of machine learning. It uses Convolution Neural Network Theory, Keras and Python to create a model which is trained by a dataset consisting of 3 popular pokemons and then detect the pokemon in the user entered image."
	},
	{
		icon: Icon4,
		link: "https://github.com/originalsidd/BackgroundGenerator.github.io",
		title: "Bg Generator",
		desc: "BackgroundGenerator is an online background generator with both random and custom generation options. Users have the freedom to select a custom two-color gradient background using the color inputs for left and right halves of the page respectively."
	},
	{
		icon: Icon5,
		link: "https://github.com/originalsidd/robofriends",
		title: "Robofriends",
		desc: "My first React project ever! Robofriends does DOM manipulation using the React library. It showcases some robots with names and emails, and features a search bar which is used to filter out the robots. Also, implemented it using React hooks and Redux state management."
	},
	{
		icon: Icon6,
		link: "https://github.com/originalsidd/Tweet-Eyes",
		title: "Tweet-Eyes",
		desc: "Tweet-Eyes is a Decentralized Analyser. It sorts out tweets from a certain range of days with a certain user entered keyword and uses a trained model to label it as possitive/negative. It shows the trending discussions and the favour value of it."
	},
]