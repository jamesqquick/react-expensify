import React from 'react';
import { connect } from 'react-redux';
import {
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate
} from '../actions/filters';

import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = e => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    id="textInput"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.filterBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onDateRangeFocusChanged}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId="startDate"
                    endDateId="endDate"
                />
            </div>
        );
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onDateRangeFocusChanged = calendarFocused => {
        this.setState(() => ({ calendarFocused }));
    };
}

const mapStateToProps = state => ({ filters: state.filters });

const mapDispatchToProps = dispatch => {
    return {
        setTextFilter: text => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: startDate => dispatch(setStartDate(startDate)),
        setEndDate: endDate => dispatch(setEndDate(endDate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
