//array containing data from people
var peopleArray = [
	{
		name: 'John',
		photo:
			'https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_UY317_CR6,0,214,317_AL_.jpg',
		score: [ '5', '3', '2', '4', '3', '5', '3', '4', '3', '5' ]
	},
	{
		name: 'Bob',
		photo:
			'https://www.biography.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTI1NDg4NTg2MDAxODA1Mjgy/bob-ross-promojpg.jpg',
		score: [ '2', '4', '3', '4', '3', '5', '4', '3', '5', '3' ]
	},
	{
		name: 'Dr. Evil',
		photo: 'http://www.bobharris.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-06-at-2.41.54-PM.png',
		score: [ '4', '1', '3', '3', '2', '4', '2', '3', '3', '2' ]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = peopleArray;
