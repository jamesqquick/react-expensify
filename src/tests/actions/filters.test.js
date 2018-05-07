import {
	setStartDate,
	setEndDate,
	setTextFilter,
	sortByDate,
	sortByAmount
} from '../../actions/filters';
import moment from 'moment';

test('should setup set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		date: moment(0)
	});
});
test('should setup set start date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		date: moment(0)
	});
});

test('should setup set text filter action object', () => {
	const action = setTextFilter('filter');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'filter'
	});
});

test('should setup set text filter  action object with default filter', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should setup set By Date action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should setup set By Amount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});
