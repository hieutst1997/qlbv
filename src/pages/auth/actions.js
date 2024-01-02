import services from '@/services';

const login = async (paypload) => {
    const response = await services.AUTH.login({
        email: paypload.email,
        password: paypload.password
    })

    if (response) {
        console.log(response)
    } else {
        return alert('đã xảy ra lỗi vui lòng thử lại')
    }


}


export default {
    login,
}