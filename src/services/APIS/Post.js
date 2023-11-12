import Fetch from "../Fetch";
import ApiHelper from "./ApiHelper";

export default class {
    static url = 'posts';
    static with = [
        'category',
        'user'
    ]

    static index(args) {
        return Fetch.get(ApiHelper.objectToString(args, `${this.url}?${ApiHelper.with(this.with)}`));
    }

    static async show(slug) {
        const data = (await Fetch.get(`${this.url}?${ApiHelper.with(this.with)}&slug=${slug}`)).at(0);

        if (!data) throw 'Error: Post not found!';

        return data;
    }
}
