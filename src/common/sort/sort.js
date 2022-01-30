import React from "react";
import { connect } from "react-redux";
import { SortingTypes } from '../../const';
import { getSortType } from '../../reducer/selectors';
import ActionCreator from '../../reducer/actions';

const Sort = ({ onSortButtonClick }) => {
    return (
        <div className='sort'>
            <h2 className='sort-title'>Сортировка</h2>
            <button type='button' onClick={() => onSortButtonClick(SortingTypes.CITY)} className='sort-city'>по городу</button>
            <button type='button' onClick={() => onSortButtonClick(SortingTypes.COMPANY)} className='sort-company'>по компании</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onSortButtonClick: (sortType) => dispatch(ActionCreator.changeSort(sortType))
});

export default connect(null, mapDispatchToProps)(Sort);