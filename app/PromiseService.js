class PromiseService {
    getDataAsPromise(data, errorMessage) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.length > 0) {
                    resolve(data);
                } else {
                    reject(errorMessage)
                }
            },3000)
        });
    }
}

export default PromiseService;