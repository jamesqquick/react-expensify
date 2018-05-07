import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { start } from 'repl';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeAll(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render expense list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data correctly', () => {
    expect(
        wrapper.setProps({
            filters: altFilters
        })
    ).toMatchSnapshot();
});

test('should handle text change', () => {
    const event = {
        target: {
            value: 'text'
        }
    };
    wrapper.find('#textInput').simulate('change', event);
    expect(setTextFilter).toHaveBeenCalledWith('text');
});

// test('should sort by date', () => {
// 	wrapper.setProps({
// 		filters: altFilters
// 	});
// 	const event = {
// 		target: {
// 			value: 'date'
// 		}
// 	};

// 	wrapper.find('select').simulate('change', event);
// 	expect(sortByDate).toHaveBeenCalled();
// });

test('should sort by amount', () => {
    const event = {
        target: {
            value: 'amount'
        }
    };

    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days');

    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate,
        endDate
    });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus change', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(
        'startDate'
    );

    //Check state matches
    expect(wrapper.state('calendarFocused')).toBeTruthy();
});
