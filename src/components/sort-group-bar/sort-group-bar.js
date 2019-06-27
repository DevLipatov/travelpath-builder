import React, {Component} from 'react';
import {compose} from "redux";
import {connect} from 'react-redux';
import {Button, ButtonToolbar} from "react-bootstrap";
import {categoriesLoaded, categoryChange} from "../../actions";
import withDataService from "../hoc/with-data-service";

import './sort-group-bar.css';

class SortGroupBar extends Component {

    componentWillMount() {
        const {dataService, categoriesLoaded} = this.props;
        dataService.getCategories().then(
            (categories) => categoriesLoaded(categories)
        );
    }

    render() {
        const {categories, shownCategory} = this.props;

        const setVariant = (category) => {
            if (shownCategory === category) {
                return "primary"
            }
            return "outline-secondary"
        };

        const elements = categories.map(
            (item) => {
                return (
                    <Button variant={setVariant(item)}
                            key={item}
                            onClick={
                                () => console.log(this.props.categoryChange(item))}>
                        {item}
                    </Button>)
            }
        );

        return (
            <ButtonToolbar>
                {elements}
            </ButtonToolbar>
        )
    }
}

const mapStateToProps = ({categories, shownCategory}) => {
    return {categories, shownCategory}
};

const mapDispatchToProps = {categoryChange, categoriesLoaded};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(SortGroupBar);