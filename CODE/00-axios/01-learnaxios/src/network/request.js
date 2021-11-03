import axios from 'axios'

export function request(config) {
  // 1.创建 axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.发送真正的网略请求
  // 本身返回的就是Promise
  return instance(config)
}


// 方法三：Promise
/*export function request(config) {
  return new Promise((resolve, reject) => {
    // 1.创建 axios的实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:7878/api/hy66',
      timeout: 5000
    })

    // 2.发送真正的网略请求
    instance(config)
      .then(res => {
        resolve(res)
      }).catch(err => {
      reject(err)
    })
  })
}*/


// 方法二
/*export function request(config) {
  // 1.创建 axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.发送真正的网略请求
  instance(config)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
    })
}*/


// 方法一
/*
export function request(config, success, failure) {
  // 1.创建 axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.发送真正的网略请求
  instance(config)
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
    })
}*/
