import React from 'react';
import DataService from '../../services/index';

import './ready-path-page.css';

const ReadyPathPage = () => {

    const dataService = new DataService();
    const inPathElements = dataService.findByInPath(true).map(
        (el) => <div>{el.title}</div>
    );
    const categorySortedData = dataService.findByCategory("Church").map(
        (el) => <div>{el.category} -- {el.title}</div>
    );

    return <div>inPath<br/>{inPathElements}<br/>{categorySortedData}</div>
};

export default ReadyPathPage;