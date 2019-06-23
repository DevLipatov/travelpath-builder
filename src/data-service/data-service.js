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
                    key: el.id,
                    coordinates: el.coordinates
                }])
        );

        return coordinatesArray
    }
}