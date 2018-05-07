import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should display only expenses that contain letter u', () => {
	const filter = {
		text: 'u',
		sortBy: '',
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual([expenses[3]]);
});

test('should display only expenses created later than start date', () => {
	const filter = {
		text: '',
		sortBy: '',
		startDate: moment(0),
		endDate: undefined
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('should display only expenses created before the end date', () => {
	const filter = {
		text: '',
		sortBy: '',
		startDate: undefined,
		endDate: moment(0)
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual([expenses[0], expenses[1]]);
});

test('should display all results when no filters are applied', () => {
	const filter = {
		text: '',
		sortBy: '',
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual(expenses);
});

test('should sort by date', () => {
	const filter = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual([
		expenses[2],
		expenses[3],
		expenses[0],
		expenses[1]
	]);
});

test('should sort by amount amount', () => {
	const filter = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const visibleExpenses = selectExpenses(expenses, filter);
	expect(visibleExpenses).toEqual([
		expenses[1],
		expenses[3],
		expenses[0],
		expenses[2]
	]);
});
