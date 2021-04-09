var playname = localStorage.getItem("playerName");

var roomArray = [
	{
		image: src = "https://cdn1.opensecrets.org/news/wp-content/uploads/2017/03/01161408/sunshine-1200-819b8251af8753c4813989c2f520b3fb66941fd3329cca14fef160303f97fe77-e1489426985706.png",
		title: 'School life', ///0
		text: ' Robert needs to go to school today, but he is still at home. Now is 7:50. ',
		choices: [
			{
				text: 'Pack the schoolbags and get in the car',
				index: 2
			},
			{
				text: 'Eat the breakfast',
				index: 1
			},
		]
	},
	{
		image: src = "https://www.incimages.com/uploaded_files/image/1920x1080/getty_180432209_970647970450021_79883.jpg",
		title: 'Late', ///1
		text: `After eating breakfast, the school's gate is close.`,
		choices: [
			{
				text: 'Call Pamela to let me in',
				index: 2
			},
			{
				text: 'Go home',
				index: 3
			},
		]
	},
	{
		image: src = "https://www.chelseahall.com/wp-content/uploads/2019/07/Calculus-AB.jpg",
		title: 'First course', ///2
		text: 'Fisrt class is Calculus AB, what should Robert do',
		choices: [
			{
				text: 'Go to class',
				index: 4
			},

			{
				text: `Go to bathroom`,
				index: 5
			}
		]
	},
	{
		image: src = "https://i.pinimg.com/originals/f1/06/25/f10625b4fc2acabe33a825d4025ec738.jpg",
		title: 'Stay at home', ///3
		text: 'Because the gate was closed, so Robert go home and sleep',
		choices: [
			{
				text: 'Good night',
				
			},
		]
	},
	{
		image: src = "ethan.jpg",
		title: 'Ethan ', ///4
		text: 'Robert sits beside Ehtan, and he saw Ethan is sleeping',
		choices: [
			{
				text: 'hit his head',
				index: 5
			},
			{
				text: 'report to teacher',
				index: 6
			},
			{
				text: 'let him keep sleeping',
				index: 7
			},
			
		]
	},
	{
		image: src = "https://ca-times.brightspotcdn.com/dims4/default/a8f0a0b/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F71%2F04%2F7deea2761dc76aff86b3f0e1585b%2Fla-1460594069-snap-photo",
		title: 'Bathroom', ///5
		text: `Ethan and I go to bathroom and chat for 15 mins. `,
		choices: [
			{
				text: 'Go back to class',
				index: 6
			},
		]
	},
	{
		image: src = "112.jpg",
		title: 'Class time', ///6
		text: "We wrote the review paper during the class and the class is over. ",
		choices: [
			{
				text: 'Go to next class',
				index: 8
			},
		]
	},
	{
		image: src = "george.jpg",
		title: 'Class time', ///7
		text: "Ethan slept for the entire class, and I fell asleep too.",
		choices: [
			{
				text: 'The class is over, go to next class',
				index: 8
			},
		]
	},
	{
		image: src = "https://gamedevunchained.com/wp-content/uploads/2020/11/Logo_animated.gif",
		title: 'Second class', ///8
		text: " Second class is Game Dev. What should Robert do",
		choices: [
			{
				text: 'Go to class',
				index: 9
			},
			{
				text: 'Go to bathroom again',
				index: 10
			},
		]
	},
	{
		image: src = "https://unity3d.com/files/images/ogimg.jpg",
		title: 'Time for Unity', ///9
		text: '"Mr.Ting told us to open unity and do the work."',
		choices: [
			{
				text: 'Open Unity ',
				index: 11
			},
			{
				text: 'Open Youtube',
				index: 12
			},
			
		]
	},
	{
		image: src = "https://c8.alamy.com/comp/BJDD97/high-school-jocks-and-a-nerd-BJDD97.jpg",
		title: 'Caught', ///10
		text: '"Mr.Ting come to bathroom and tell us to go back."',
		choices: [
			{
				text: 'Go back to class',
				index: 9
			},
		]
	},
	{
		image: src = "https://unity3d.com/profiles/unity3d/themes/unity/images/unity/beta/alpha-beta/2020.1b-improvements.jpg",
		title: 'Making game', ///11
		text: `Watching the tutorial and making the game. And, the class is over again. `,
		choices: [
			{
				text: 'Go to next class',
				index: 14
			},
			
		]
	},
	{
		image: src = "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc",
		title: 'Youtube', ///12
		text: `I'm watching Dinter.`,
		choices: [
			{
				text: 'Catch by Johnson',
				index: 13
			},
			{
				text: 'Watch until class over',
				index:14
			}
		]
	},
	{
		image: src = "https://images.squarespace-cdn.com/content/v1/555dec69e4b0d64b50ffda43/1483719086110-N093V0BB88S9C9SYROSM/ke17ZwdGBToddI8pDm48kJhqTxbaMS_3nj_pXKuIpi9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI-RjgUjNDTuxbp4tlv02bE64KPrwfMHlHpXyoccXBQ-cKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg",
		title: 'GGWP', ///13
		text: 'Johnson sits behide me for entire class',
		choices: [
			{
				text: 'Go to next class',
				index: 14
			},
			
		]
	},
	{
		image: src = "https://miro.medium.com/max/372/0*g7rqzQCKsDkU0JnK.png",
		title: 'Third class', ///14
		text: 'Third class is Networking. And, we have a test today',
		choices: [
			{
				text: 'Stomachache',
				index: 15
			},
			{
				text: `Guess`,
				index: 16
			}
		]
	},
	{
		image: src = "https://lh3.googleusercontent.com/proxy/4yH3prWq0vx6nZHM67WtCCyQ0ST46xA-IfB1gCNtY8NAkXHXkL5v8mt65m0xSM-RswdfGyvtvve4MPQzsLDvZiZN2DNQmA9zMHqXFw5BVuArlJcR7ULqUgF4TZB_OlxQGA",
		title: 'Nurse', ///15
		text: 'Robert go to nurse and take a break.',
		choices: [
			{
				text: 'Go home.',
				index: 17
			},
			{
				text: 'Go eat lunch',
				index: 18
			},
		]
	},
	{
		image: src = "data:image/jpeg;base64,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",
		title: 'Test', ///16
		text: 'After guessing the test, what should Robert do',
		choices: [
			{
				text: 'Go eat lunch ',
				index: 18
			},
			
		]
	},
	{
		image: src = "https://img.freepik.com/free-vector/back-school-go-home-after-new-normal-flat-design_169137-842.jpg?size=626&ext=jpg ",
		title: 'Home', ///17
		text: "Robert is happy because he is going home",
		choices: [
			{
				text: 'Sleep, Goodnight',
			
			},
		]
	},
	{
		image: src = "http://i.imgur.com/QqU6GZK.jpg",
		title: 'Stomachache', ///18
		text: 'Robert is not feeling well because lunch is poisonous. ',
		choices: [
			{
				text: 'Go home',
				index: 17.
			},
		
		]
	}
]
	
