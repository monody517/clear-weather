import Taro,{ request, uploadFile } from '@tarojs/taro';

interface models {
    models: any;
    last: any;
}

export interface ComResponse<D = any> {
    readonly code: number;
    readonly message: string;
    readonly data: D & models;
    readonly success: boolean;
}

const UtilService = {
    /**
     * 通用请求处理
     * @param response
     * @param toastError
     */
    async responseHandle<T extends ComResponse<any>>(
        response,
        toastError = true,
    ): Promise<T extends ComResponse<infer D> ? D : any> {
        console.log(response);
        // if (!response.data.success) {
        //     toastError && Taro.showToast(response.data.message);
        //     return Promise.reject(response.data);
        // }
        return response.data;
    },
}


export default UtilService;