'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  // api
  router.post('/register', controller.user.register)                  // 注册
  router.post('/login', controller.user.login)                        // 登录
  router.get('/user', app.jwt, controller.user.getAllUser)            // 获取全部用户
  router.get('/user/:id', app.jwt, controller.user.getUserById)       // 通过id查询指定用户
  router.put('/user', app.jwt, controller.user.updateUserInfo)        // 更新用户信息
  router.delete('/user/:id', app.jwt, controller.user.deleteUserById) // 删除指定用户
  router.put('/gift', app.jwt, controller.live.addGifts)              // 添加礼物
  router.put('/live', app.jwt, controller.live.updateLive)            // 更新直播间信息
  router.get('/live', app.jwt, controller.live.getAllLive)            // 获取全部直播间
  router.put('/ban/:banId/:ban', app.jwt, controller.live.banLive)    // 禁用/解禁直播间
  // socket.io
  io.of('/').route('new message', io.controller.chat.newMessage)
  io.of('/').route('old message', io.controller.chat.oldMessage)
};
