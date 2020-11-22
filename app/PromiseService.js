export default class PromiseService {
  loading = true;

  getDataAsPromise(data, errorMessage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.length > 0) {
          resolve(data);
          this.loading = false;
        } else {
          reject(errorMessage);
          this.loading = false;
        }
      }, 3000);
    });
  }
}
