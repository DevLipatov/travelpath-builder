import MockData from '../mock-data/mock-data';

export default class DataService {

    findByCategory(category) {
        return MockData.filter(
            (el) => el.category === category
        )
    }

    findByInPath() {
        return MockData.filter(
            (el) => el.inpath
        )
    }

    getAllCoordinates() {
        let coordinatesArray = [];
        MockData.map(
            (el) => (coordinatesArray = [...coordinatesArray,
                    {
                        id: el.id,
                        coordinates: el.coordinates
                    }]
            )
        );
        return coordinatesArray
    }

    getShortInfo() {
        let shortInfo = [];
        MockData.map(
            (el) => (shortInfo = [...shortInfo,
                    {
                        id: el.id,
                        title: el.title,
                    }]
            )
        );
        return shortInfo
    }

    getFullInfo() {
        return MockData
    }
}