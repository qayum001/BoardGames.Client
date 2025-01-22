export const CookieUtils = {
    set: function (name, value) {
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        document.cookie = cookieString;
    },

    get: function (name) {
        const cookies = document.cookie.split('; ').reduce((acc, curr) => {
            const [key, value] = curr.split('=');
            acc[decodeURIComponent(key)] = decodeURIComponent(value);
            return acc;
        }, {});
        return cookies[name] || null;
    },

    delete: function (name) {
        this.set(name, '');
    }
};