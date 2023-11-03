import Fetch from "../Fetch";

export default class {
    static url = 'authors';

    static async show(username) {
        if (!username) return null;

        const data = (await Fetch.get(`${this.url}?username=${username}`)).at(0);

        if (!data) throw 'Error: Can\'t find author';

        return data;
    }
}

