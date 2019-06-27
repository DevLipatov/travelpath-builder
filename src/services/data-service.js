import mockData from '../mock-data/mock-data';
import mockCategories from '../mock-data/mock-categories';

export default class DataService {

    findByCategory(category) {
        return mockData.filter(
            (el) => el.category === category
        )
    }

    findByInPath() {
        return mockData.filter(
            (el) => el.inpath
        )
    }

    getAllCoordinates() {
        let coordinatesArray = [];
        mockData.map(
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
        mockData.map(
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
        // return new Promise(
        //     (resolve) => {
        //         setTimeout(() => resolve(mockData))
        //     }, 700
        // )
        return mockData
    }

    getCategories() {
        return mockCategories;
    }
}