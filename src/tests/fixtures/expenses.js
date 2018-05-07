import moment from 'moment';

export default [
	{
		id: '1',
		note: '',
		amount: 195,
		createdAt: 0,
		description: 'First Note'
	},
	{
		id: '2',
		note: '',
		amount: 100,
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf(),
		description: 'Second Note'
	},
	{
		id: '3',
		note: '',
		amount: 200,
		createdAt: moment(0)
			.add(4, 'days')
			.valueOf(),
		description: 'Third Note'
	},
	{
		id: '4',
		note: '',
		amount: 150,
		createdAt: moment(0)
			.add(4, 'days')
			.valueOf(),
		description: 'Fourth Note'
	}
];
