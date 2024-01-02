import lib from '@/lib.js';

const middleware = async (to, from, next) => {
    const userToken = lib.getCookie('token');
    if (!userToken ) {
        return next('/login');
    }

    return next();
};

export default middleware;