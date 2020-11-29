import swdService from '@/service/swdService';

const swdModule = {
  namespaced: true,
  actions: {
    query(_, qq) {
      return new Promise((resolve, reject) => {
        swdService.query({ qq }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
  },
};
export default swdModule;
