// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.
import image from '../assets/images/satglow.png'; 
import image2 from '../assets/images/satglow-reseller.png'; 
import image3 from '../assets/images/rekrutmen-office.png'; 
import image4 from '../assets/images/booking-vehicle-room.png'; 
// import image5 from '../assets/images/mobile-project-2.jpg'; 
// import image6 from '../assets/images/web-project-1.jpg'; 

const projects = [{
		id: 1,
		title: 'Company Profile',
		category: 'Web Application',
		img: image,
		url: 'https://satelliteofglow.com/',
	},
	{
		id: 2,
		title: 'Website Reseller',
		category: 'Web Application',
		img: image2,
		url: 'https://reseller.satelliteofglow.com/',
	},
	{
		id: 3,
		title: 'Rekruitmen Office',
		category: 'Web Application',
		img: image3,
		url: 'https://recruitment.nose.co.id/office',
	},
	{
		id: 4,
		title: 'Booking Room & Vehicle',
		category: 'Web Application',
		img: image4,
		url: 'https://booking.nose.co.id/',
	},
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: image5,
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: image6,
	// },
];

export default projects;