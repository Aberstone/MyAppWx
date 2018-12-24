// pages/weather_v2/weather_v2.js

var weatherStatus = Array["晴", "多云", "阴", "雨"]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bgURL": "../../image/weather_v2/0.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // var that = this
    // wx.getLocation({
    //   success: function (res) {
    //     var lat = res.latitude
    //     var lon = res.longitude
    //     var rData = {
    //       "lon": lon,
    //       "lat": lat,
    //       "v": "2.0"
    //     }
    //     wx.request({
    //       url: 'https://abersapi.oicp.vip/weather',
    //       method: "GET",
    //       data: rData,
    //       success: function (res) {
    //         that.setData(res.data)
    //       }
    //     })
    //   },
    // })
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

  }
})