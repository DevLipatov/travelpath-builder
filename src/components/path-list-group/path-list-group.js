import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Accordion, Badge, Button, Card} from "react-bootstrap";
import {deleteFromPath} from "../../actions";

import './path-list-group.css';

class PathListGroup extends Component {

    render() {
        const {pathList, deleteFromPath} = this.props;

        const elements = pathList.map(
            (item) => {
                return (
                    <Card key={item.id}>
                        <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            {item.title}
                            <Badge pill variant="info">Click</Badge>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item.id}>
                            <Card>
                                <Card.Img src={item.img}/>
                                <Card.Body>
                                    <Card.Text>Short info</Card.Text>
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => deleteFromPath(item.id)}>
                                            Delete from path
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
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

const mapDispatchToProps = {deleteFromPath};

export default connect(mapStateToProps, mapDispatchToProps)(PathListGroup);