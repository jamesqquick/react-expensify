import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	//@@INIT is the initial command to initialize the reducer
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortby to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
	const currentState = {
		text: '',
		startDate: undefined,
		endDate: undefined,
		sortBy: 'amount'
	};
	const action = {
		type: 'SORT_BY_DATE'
	};
	const state = filtersReducer(currentState, action);
	expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter', () => {
	const state = filtersReducer(undefined, {
		type: 'SET_TEXT_FILTER',
		text: 'Hey'
	});
	expect(state.text).toBe('Hey');
});

//should set start date filter
test('should set start date', () => {
	const startDate = moment();

	const state = filtersReducer(undefined, {
		type: 'SET_START_DATE',
		date: startDate
	});
	expect(state.startDate).toBe(startDate);
});

//should set end date filter
test('should set end date', () => {
	const endDate = moment();
	const state = filtersReducer(undefined, {
		type: 'SET_END_DATE',
		date: endDate
	});
	expect(state.endDate).toBe(endDate);
});
