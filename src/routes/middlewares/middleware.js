const MIDDLEWARES = {
    guest: () => import('./guest.js')
}

export async function handler(to) {
    if (to.meta.middleware) {
        const middleware = await MIDDLEWARES[to.meta.middleware]();
        return middleware?.handler();
    }
}
