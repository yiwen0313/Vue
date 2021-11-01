import {UPDATEINFO} from "./mutations-types";

export default {
  // context 上下文
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(UPDATEINFO)
        console.log(payload);

        resolve('1111111')
      }, 1000)
    })
  }
}
