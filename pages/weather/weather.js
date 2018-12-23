// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 返回首页
   */
  backToFirstPage: function() {
    wx.navigateBack({
      delta:1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    wx.getLocation({
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var data = {
          "location": longitude+','+latitude
        }
        wx.request({
          url: 'https://abersapi.oicp.vip/weather',
          data: data,
          method: "GET",
          success: function(res) {
            var weatherData = res.data.results[0]
            that.setData(
              {
                "city": weatherData.currentCity,
                "tmp": weatherData.weather_data[0].temperature,
                "detail": weatherData.weather_data[0].weather,
                "wind": weatherData.weather_data[0].wind,
                "bgUrl": "../../image/white.jpg",
                "items":weatherData.index,
                "daily_forecast":weatherData.weather_data
              }
            );
          } 
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})