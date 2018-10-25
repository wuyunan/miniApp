// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("token") !== "",
    userInfo: wx.getStorageSync("user_info") 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    app.agriknow.login("18621271325", "1111")
      .then(res => {
        console.log(res)
        wx.setStorage({
          key: "user_info",
          data: res
        })
        wx.setStorage({
          key: "token",
          data: res.token
        })
        this.setData({
          isLogin: wx.getStorageSync("token") !== "",
          userInfo: wx.getStorageSync("user_info") 
        })
      })
      .catch(res => {

        wx.showToast({
          title: '出错了！',
          icon: 'none'
        })
      })
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  getCode: function() {
    app.agriknow.getCode("18621271325")
      .then(res => {
        console.log(res)
      })
      .catch(res => {

        wx.showToast({
          title: '出错了！',
          icon: 'none'
        })
      })
  }
})