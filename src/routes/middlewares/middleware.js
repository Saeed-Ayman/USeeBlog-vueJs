export async function handler(to) {
    if (to.meta.middleware) {
        const middleware =  await import(/* @vite-ignore */ `./${to.meta.middleware}.js`);
        return middleware?.handler();
    }
}
