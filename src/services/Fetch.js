export default class {
    static METHODS = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        PATCH: 'PATCH',
        DELETE: 'DELETE',
    }

    static URL_APP = import.meta.env.VITE_APP_API_URL;

    static async customFetch(url, method = this.METHODS.GET, data = {}) {
        let request_init = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }

        if (method !== this.METHODS.GET) request_init.body = JSON.stringify(data);

        let response = await fetch(`${this.URL_APP}/${url}`, request_init);

        if (!response.ok) throw 'can\'t get data.';

        return response.json();
    }

    static get(url) {
        return this.customFetch(url);
    }

    static post(url, data) {
        return this.customFetch(url, this.METHODS.POST, data);
    }

    static patch(url, data) {
        return this.customFetch(url, this.METHODS.PATCH, data);
    }

    static put(url, data) {
        return this.customFetch(url, this.METHODS.PUT, data);
    }

    static delete(url) {
        return this.customFetch(url, this.METHODS.DELETE);
    }
}
