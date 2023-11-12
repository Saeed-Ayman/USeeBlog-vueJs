import Fetch from "../Fetch";
import ApiHelper from "@/services/APIS/ApiHelper.js";

export default class {
    static url = 'users';

    static async show(args) {
        const data = (await Fetch.get(ApiHelper.objectToString(args, `${this.url}?`))).at(0);

        if (!data) throw 'Error: Can\'t find author';

        return data;
    }

    static async store(user) {
        // TODO : Make validation
        const rand = () => Math.random().toString(36).substring(2);

        user.img = `https://i.pravatar.cc/?img=${Math.floor(Math.random() * 100)}`;
        user.username = '@' + user.email.substring(0, user.email.indexOf('@'));
        user.token = rand() + rand() + rand() + rand() + rand();

        return await Fetch.post(this.url, user);
    }

    static async update(id, user) {
        // TODO : Make validation
        return await Fetch.patch(`${this.url}/${id}`, user);
    }

    static async destroy(id) {
        return await Fetch.delete(`${this.url}/${id}`);
    }
}

