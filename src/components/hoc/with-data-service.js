import React from 'react';
import {ServiceConsumer} from "../service-context";

const withDataService = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (dataService) => {
                        return (<Wrapped {...props}
                                 dataService={dataService}/>)
                    }
                }
            </ServiceConsumer>
        );
    }
};

export default withDataService;