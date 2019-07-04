import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Image, Modal} from "react-bootstrap";
import {addToPath, toggleModalOff} from "../../actions";
import {compose} from "redux";
import withDataService from "../hoc/with-data-service";

import './custom-modal.css';
import CustomSpinner from "../custom-spinner/custom-spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const CustomModal = ({
                         modalShow,
                         modalContent,
                         onAddClick,
                         toggleModalOff,
                         fullInfo,
                         fullInfoLoading,
                         fullInfoError
                     }) => {

        const loadingIndicator = () => {
            if (fullInfoLoading) {
                return <CustomSpinner/>
            }
            if (fullInfoError) {
                return <ErrorIndicator/>
            }
        };

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
                    <Image src={modalContent.img} className="modal-img"/>
                    {loadingIndicator()}
                    {fullInfo.description}
                    <br/>
                    <br/>
                    {fullInfo.tel}
                    <br/>
                    <br/>
                    {fullInfo.working}
                </Modal.Body>
                <Modal.Footer>
                    <div className="modal-wiki">{fullInfo.wiki}</div>
                    <Button variant="secondary" onClick={toggleModalOff}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onAddClick}>
                        Add to path
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
;

class CustomModalContainer extends Component {

    render() {
        const {
            modalShow,
            toggleModalOff,
            modalContent,
            addToPath,
            fullInfo,
            fullInfoLoading,
            fullInfoError
        } = this.props;

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
                fullInfo={fullInfo}
                fullInfoLoading={fullInfoLoading}
                fullInfoError={fullInfoError}/>
        )
    }
}

const mapStateToProps = ({modalShow, modalContent, fullInfo, fullInfoLoading, fullInfoError}) => {
    return {modalShow, modalContent, fullInfo, fullInfoLoading, fullInfoError}
};

const mapDispatchToProps = {toggleModalOff, addToPath};

export default compose(
    withDataService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CustomModalContainer);