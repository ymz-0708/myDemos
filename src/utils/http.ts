import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
// 用于做接口提示
import { ElMessage } from "element-plus";

/**
 * @description axios 请求方法封装
 * @param method 请求方法
 * @param url 请求路径
 * @param params 请求参数
 */
function axiosMethods(method: string, url: string, params: object): Promise<AxiosResponse> {
    const apiUrl = "development" === process.env.NODE_ENV ? `/proxy${url}` : `/api${url}`;
    let axiosParams: AxiosRequestConfig = {
        method,
        url: apiUrl,
        headers: {
            "cache-control": "no-store,must-revalidate,no-cache",
        },
    };
    if (["get", "delete"].includes(method)) {
        axiosParams.params = params;
    } else if (["post", "put"].includes(method)) {
        axiosParams.data = params;
    }
    return new Promise((resolve, reject) => {
        axios(axiosParams)
            // 连接成功
            .then(({ data }: AxiosResponse) => {
                if (200 === data.code) {
                    // 返回成功
                    resolve(data.result)
                } else {
                    // 返回失败
                    ElMessage.error(data.resultMsg);
                    reject(data);
                }
            })
            // 连接成功
            .catch((error: AxiosError) => {
                console.error(error);
                reject(error);
            });
    });
}

export default {
    get(url: string, params: object = {}): Promise<AxiosResponse> {
        return axiosMethods("get", url, params);
    },
    post(url: string, params: object = {}): Promise<AxiosResponse> {
        return axiosMethods("post", url, params);
    },
    put(url: string, params: object = {}): Promise<AxiosResponse> {
        return axiosMethods("put", url, params);
    },
    delete(url: string, params: object = {}): Promise<AxiosResponse> {
        return axiosMethods("delete", url, params);
    },
};
