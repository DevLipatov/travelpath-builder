import MockData from '../mock-data/mock-data';

export default class DataService {

    findByCategory(category) {
        return MockData.filter(
            (el) => el.category === category
        )
    }

    findByInPath(state) {
        return MockData.filter(
            (el) => el.inpath
        )
    }
}