import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListGroup} from "react-bootstrap";

import './path-list-group.css';

class PathListGroup extends Component {

    render() {
        const {pathList} = this.props;

        const elements = pathList.map(
            (item)=> {
                return <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
            }
        );

        return (
            <ListGroup>
                {elements}
            </ListGroup>
        )
    }
}

const mapStateToProps = ({pathList}) => {
    return {pathList}
};

export default connect(mapStateToProps)(PathListGroup);