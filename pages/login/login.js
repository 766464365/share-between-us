Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    password:'',
    status:false,
  },
  input_user:function(e){
    this.setData({
        user:e.detail.value,
    })
  },
  input_password:function(e){
      this.setData({
          password: e.detail.value
      })
  },
  login_btn:function(e){
     
      console.log(this.data.user)
      console.log(this.data.password)
      if(this.data.user==''&&this.data.password=='')
      {
          wx.showToast({
              title: '请输入正确账户及密码',
              icon: 'none',
              duration: 2000
          })
      }
      else{
          wx.navigateTo({
              url: '/pages/index/index',
          })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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