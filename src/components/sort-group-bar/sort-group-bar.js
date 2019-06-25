import React, {Component} from 'react';
import {connect} from 'react-redux';
import './sort-group-bar.css';
import {Button, ButtonToolbar} from "react-bootstrap";

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
                console.log(shownCategory);
                return (<Button variant={setVariant(item)}
                                key={item}>{item}</Button>)
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

export default connect(mapStateToProps)(SortGroupBar);