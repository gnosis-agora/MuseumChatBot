export const expression_data = {
	START: {
		text: "In the 1970s, artists started to question the existing role \
		of art and moved on from modes of representation to modes of production and consumption. \
		The explosion of biennales internationally and a growing interest in art from Asia led local artists to explore performance, \
	 	installation and video as art expression.",
	 	quick_replies: [
    	{
    		content_type: "text",
    		title: "Tell me more",
    		payload: "TELL_ME_MORE_EXPRESSION",
    	},
    	{
    		content_type: "text",
    		title: "Notable Artworks",
    		payload: "NOTABLE_ARTWORKS_EXPRESSION"
    	}
	 	]
 	},

 	TELL_ME_MORE_EXPRESSION: {
 		text: "Please choose which category you would like to know more about.",
 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Contemporary",
 				payload: "CONTEMPORARY"
 			},
 			{
 				content_type: "text",
 				title: "Perspective",
 				payload: "PERSPECTIVE"
 			},
 			{
 				content_type: "text",
 				title: "Delivery",
 				payload: "DELIVERY"
 			} 			
 		]
 	},

 	NOTABLE_ARTWORKS_EXPRESSION: {
 		attachment: {
 			type: "template",
 			payload: {
 				template_type: "generic",
 				elements: [
 					{
 						title: "Generic image 1",
 						image_url: "http://i.imgur.com/sj7QjSU.jpg",
 						buttons: [
 							{
 								type: "postback",
 								title: "Learn more",
 								payload: "EXPRESSION_ARTWORK1_PART_1"
 							}
 						]
 					},
 					{
 						title: "Generic image 2",
 						image_url: "http://i.imgur.com/lZKq2uA.jpg",
 						buttons: [
 							{
 								type: "postback",
 								title: "Learn more",
 								payload: "EXPRESSION_ARTWORK2_PART_1"
 							}
 						]
 					},
 					{
 						title: "Generic image 3",
 						image_url: "http://i.imgur.com/ykVgu6G.jpg",
 						buttons: [
 							{
 								type: "postback",
 								title: "Learn more",
 								payload: "EXPRESSION_ARTWORK3_PART_1"
 							}
 						]
 					}, 					
 				]
 			}
 		}
 	},

 	CONTEMPORARY: {
 		text: "Questions concerning the art object and its relationship to everyday life are constantly under scrutiny \
 		by contemporary artists. Many early conceptual art works like “Sculpture” and “The Picnic” have critiqued on the \
 		estrangement between art and everyday life. Hence, artists have started to explore new ways to define art and make art “live” again. ",
 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Expense of Spirit in a Waste of Shame",
 				payload: "EXPRESSION_ARTWORK1_PART_1"
 			}
 			{
 				content_type: "text",
 				title: "Study of Three Thermos Flasks",
 				payload: "EXPRESSION_ARTWORK2_PART_1"
 			}
 		]
 	},

 	PERSPECTIVE: {
 		text: "Art is in the eye of the beholder, and everyone will have their own interpretation. \
 		Often of times, conceptual art works convey much more meaning that what is being seen. \
 		The artist’s message may even be convoluted by the viewer’s own interpretation. \
 		That is the beauty of art; a medium that breeds creation.",
 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Yellow Field",
 				payload: "EXPRESSION_ARTWORK1_PART_1"
 			}
 			{
 				content_type: "text",
 				title: "Walks through a Chair",
 				payload: "EXPRESSION_ARTWORK2_PART_1"
 			}
 		] 		
 	},

 	DELIVERY: {
 		text: "Experimentation with new mediums to create art has expanded the creativity of artists. \
 		Every conceptual artist possesses their own perspective on what medium is the best form to build their works on. \
 		In this section, we will explore some of the more unorthodox and unique forms that art works have been delivered.",
 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Gully Curtains",
 				payload: "EXPRESSION_ARTWORK1_PART_1"
 			}
 			{
 				content_type: "text",
 				title: "MIKE",
 				payload: "EXPRESSION_ARTWORK2_PART_1"
 			}
 		] 		
 	}, 	

 	EXPRESSION_ARTWORK1_PART_1: {
 		text: "installation by Suzann Victor. The fleeting yet repetitive and mesmerising contact of the bulbs of troubled lovers, \
 		who seem to be locked in the never-ending cycle of splitting and reconciling, hurting and healing.",

 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Continue",
 				payload: "EXPRESSION_ARTWORK1_PART_2"
 			},
 			{
 				content_type: "text",
 				title: "Study of Three Thermos Flasks",
 				payload: "EXPRESSION_ARTWORK2_PART_1"
 			}
 		]
 	}

 	EXPRESSION_ARTWORK1_PART_2: {
 		text: "In describing the work, Victor has said: “Upon closer scrutinity of these eroticised objects of the everyday, \
 		these fat-bottomed globes mimic the gesture of clitoral stimulation on its own reflected image. \
 		But which is stimulating which? What is “pleasuring” what? Who is looking and who is being looked at? Who is the seer and who is seen?”",
 		quick_replies: [
 			{
 				content_type: "text",
 				title: "Next artwork",
 				payload: "EXPRESSION_ARTWORK2_PART_1"
 			},
 			{
 				content_type: "text",
 				title: "Persepctive",
 				payload: "PERSPECTIVE"
 			},
 			{
 				content_type: "text",
 				title: "Delivery",
 				payload: "DELIVERY"
 			}
 		]
 	}

}