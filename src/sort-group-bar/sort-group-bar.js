import React from 'react';
import './sort-group-bar.css';
import {Button, ButtonToolbar} from "react-bootstrap";

const SortGroupBar = ({categs}) => {

    const elements = categs.map(
        (item) => {
            return (<Button variant="outline-secondary">{item}</Button>)
        }
    );

    return (
        <ButtonToolbar>
            {elements}
        </ButtonToolbar>
    )
};

export default SortGroupBar;