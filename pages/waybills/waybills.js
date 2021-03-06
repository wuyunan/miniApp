// pages/waybills/waybills.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    waybills: []
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
    wx.showLoading({
      title: '加载中',
    })
    app.agriknow.getWaybills()
      .then(res => {
        console.log(res)
        this.setData({
          waybills: res
        })
        wx.hideLoading()

      })
      .catch(res => {

        wx.showToast({
          title: '出错了！',
          icon: 'none'
        })
      })
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
  onWaybillClick: function(e) {
    console.log(e.currentTarget)
    wx.navigateTo({
      url: "/pages/waybills/waybillInfo?id=" + e.currentTarget.dataset.id
    })
  }

})