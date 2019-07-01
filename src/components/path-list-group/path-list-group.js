import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Accordion, Badge, Button, ButtonGroup, Card} from "react-bootstrap";
import {deleteFromPath, setModalContent, toggleModalOn} from "../../actions";

import './path-list-group.css';

class PathListGroup extends Component {

    render() {
        const {pathList, deleteFromPath, setModalContent, toggleModalOn} = this.props;

        const onInfoClick = (info) => {
            setModalContent(info);
            toggleModalOn();
        };

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
                                    <ButtonGroup size="sm" className="d-flex">
                                        <Button
                                            variant="info"
                                            size="sm"
                                            onClick={() => onInfoClick(item)}>
                                            More info
                                        </Button>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => deleteFromPath(item.id)}>
                                            Delete from path
                                        </Button>
                                    </ButtonGroup>
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

const mapDispatchToProps = {deleteFromPath, setModalContent, toggleModalOn};

export default connect(mapStateToProps, mapDispatchToProps)(PathListGroup);