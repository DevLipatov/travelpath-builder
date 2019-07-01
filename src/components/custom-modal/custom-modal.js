import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Image, Modal} from "react-bootstrap";
import {addToPath, toggleModalOff} from "../../actions";

import './custom-modal.css';

const CustomModal = ({modalShow, modalContent, onAddClick, toggleModalOff}) => {
    return (
        <Modal
            show={modalShow}
            onHide={toggleModalOff}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {modalContent.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={modalContent.img} fluid />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModalOff} >
                    Close
                </Button>
                <Button variant="primary" onClick={onAddClick}>
                    Add to path
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

class CustomModalContainer extends Component {

    render() {
        const {modalShow, toggleModalOff, modalContent, addToPath} = this.props;

        const onAddClick = () => {

            addToPath(modalContent.id);
            toggleModalOff();
        };

        if (modalContent === undefined) {
            return <div/>
        }

        return (
            <CustomModal
                modalShow={modalShow}
                modalContent={modalContent}
                onAddClick={onAddClick}
                toggleModalOff={toggleModalOff}
            />
        )
    }
}

const mapStateToProps = ({modalShow, modalContent}) => {
    return {modalShow, modalContent}
};

const mapDispatchToProps = {toggleModalOff, addToPath};

export default connect(mapStateToProps, mapDispatchToProps)(CustomModalContainer);