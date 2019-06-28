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
                        coordinates: el.coordinates,
                        category: el.category
                    }]
            )
        );
        return new Promise((resolve) => resolve(coordinatesArray))
    }

    getShortInfo() {
        let shortInfo = [];
        mockData.map(
            (el) => (shortInfo = [...shortInfo,
                    {
                        id: el.id,
                        category: el.category,
                        title: el.title,
                        img: el.img,
                        coordinates: el.coordinates
                    }]
            )
        );
        return new Promise((resolve) => resolve(shortInfo))
    }

    getShortInfoById(id) {
        const element = mockData.find((el) => el.id === id);
        return {
            id: element.id,
            title: element.title,
            img: element.img
        }
    }

    getFullInfo() {
        return new Promise(
            (resolve) => {
                setTimeout(() => resolve(mockData), 1700)
            }
        )
    }

    getCategories() {
        return new Promise(
            (resolve) => resolve(mockCategories)
        );
    }
}