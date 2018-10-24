/**
 * name: agriknow.js
 * description: 农知汇服务器提供的服务
 * author: 徐磊
 * date: 2018-5-19
 */
import request from './request.js'
class agriknow {
  constructor() {
    console.log("agriknow")
    this._baseUrl = 'https://dev.qingniu-chain.com/api/v1/'
    this._defaultHeader = {
      'data-tupe': 'application/json'
    }
    this._request = new request
    this._request.setErrorHandler(this.errorHander)
  }

  /**
   * 统一的异常处理方法
   */
  errorHander(res) {
    console.error(res)
  }

  /**
   * 查询所有新闻列表
   */
  getNews(page = 1, size = 10) {
    let data = {
      page: page,
      size: size
    }
    return this._request.getRequest(this._baseUrl + 'appVersions', data).then(res => res.data)
  }

  /**
   * 获取所有课程
   */
  getCourseList(page = 1, size = 10, key = null) {
    let data = key != null ? {
      page: page,
      size: size,
      queryValue: key
    } : {
      page: page,
      size: size
    }
    return this._request.getRequest(this._baseUrl + 'appVersions', data).then(res => res.data)
  }

  /**
   * 获取所有课程
   */
  getCode(mobile) {
    let data = {
      mobile,
      // code: this.code,
      type: "LOGIN",
      userType: "ProviderUser",
      client: "IOS",
    }
    return this._request.postRequest(this._baseUrl + 'ShortMessages', data).then(res => res.data)
  }
  /**
   * 获取所有课程
   */
  login(mobile, code) {
    let data = {
      mobile,
      code
    }
    return this._request.postRequest(this._baseUrl + 'ProviderUsers/login', data).then(res => res.data)
  }


  /**
   * 获取所有课程
   */
  getWaybills() {
    let data = {
      filter: {
        include: {},
        limit: 10,
        fields: {
          waybillNum: true,
          shippingDate: true,
          projectId: true,
          id: true,
          driverId: true,
          isDeleted: true,
          createdAt: true,
          updatedAt: true,
          carId: true,
          plannedOrderId: true,
          carriersId: true,
          status: true,
          _car: true,
          _pickupPoints: true,
          _shippingPoints: true,
          _products: true,
          statusText: true,
        },
        where: {},
      }
    }
    return this._request.getRequest(this._baseUrl + 'Waybills', data).then(res => res.data)
  }
}
export default agriknow