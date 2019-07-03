import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Accordion, Badge, Card} from "react-bootstrap";
import ShortInfoCard from '../short-info-card';

import './path-list-group.css';

class PathListGroup extends Component {

    render() {
        const {pathList} = this.props;

        const elements = pathList.map(
            (item) => {
                return (
                    <Card key={item.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            {item.title}
                            <Badge pill variant="info">Click</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.id}>
                            <ShortInfoCard data={item}/>
                        </Accordion.Collapse>
                    </Card>
                )
            }
        );

        return (
            <Accordion>
                {elements}
            </Accordion>
        )
    }
}

const mapStateToProps = ({pathList}) => {
    return {pathList}
};

export default connect(mapStateToProps)(PathListGroup);