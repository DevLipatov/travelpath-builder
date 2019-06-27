import React, {Component} from 'react';
import {connect} from 'react-redux';
import {categoryChange} from "../../actions";
import {Button, ButtonToolbar} from "react-bootstrap";

import './sort-group-bar.css';

class SortGroupBar extends Component {

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

const mapDispatchToProps = {categoryChange};

export default connect(mapStateToProps, mapDispatchToProps)(SortGroupBar);