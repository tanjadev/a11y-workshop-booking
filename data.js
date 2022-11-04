const hotelDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed justo magna. Suspendisse interdum ac augue eu vulputate. Curabitur vestibulum laoreet mollis. Praesent magna arcu, semper viverra scelerisque sit amet, auctor id dolor. Sed in nunc ut est dapibus rhoncus. In blandit, purus sit amet aliquam elementum, lectus urna viverra diam, feugiat semper leo purus ut nulla. Donec metus ante, suscipit ac posuere vitae, fringilla sed lacus. Quisque accumsan ex malesuada tortor porta congue. Nam sed diam sit amet odio bibendum porttitor in non ligula. Praesent vehicula ipsum nec porta lobortis. Nunc quam est, sollicitudin rutrum nisl sit amet, commodo pellentesque ante. Vivamus sit amet ipsum ac ante luctus pharetra a ac lectus. Donec eget nulla urna. Vestibulum tincidunt magna ipsum, ut placerat eros accumsan eget.';

module.exports = {
	flights: [
		{ id: 'LH1366', carrier: 'Lufthansa', from: 'FRA', to: 'KRK', dep: '2017-12-10 15:00' },
		{ id: 'LH1234', carrier: 'Lufthansa', from: 'FRA', to: 'SFO', dep: '2017-12-11 15:00' },
		{ id: 'FR110', carrier: 'Ryanair', from: 'WMI', to: 'DUB', dep: '2017-12-11 15:15' }
	],
	hotels: [
		{ id: 'q-plus', title: 'Q Hotel Plus', price: '110€', stars: 3, description: hotelDescription, recommendation: 71 },
		{ id: 'raddision', title: 'Raddision Blue', price: '150€', stars: 5, description: hotelDescription, recommendation: 98 },
		{ id: 'novotel', title: 'Novotel', price: '120€', stars: 3, description: hotelDescription, recommendation: 60 },
	]
};
