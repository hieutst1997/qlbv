import restFulAPI from '@/untils/resfulApi.js';

const login = async({email, password}) => {
    try {
        const response = await restFulAPI.get({
            endPoint: `/user`,
            body: {
                email,
                password 
            },
        });

        if (response) {
            return response;
        } else {
            return alert('đã xảy ra lỗi vui lòng thử lại')
        }
    } catch (e) {
        throw e;
    }
}

export default {
    login
}
