import Fetch from "../Fetch";

export default class {
    static url = 'categories';

    static async index(args = {}) {
        return Fetch.get(this.url);
    }

    static async show(slug) {
        if (!slug || slug === 'all') return null;

        const category = (await Fetch.get(`${this.url}?slug=${slug}`)).at(0);

        if (!category) throw 'Error: can\'t find this category.';

        return category;
    }
}

