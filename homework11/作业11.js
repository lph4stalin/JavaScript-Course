//
// 在 vip.cocode.cc:3000/ 可以写代码, 实现一个用 ajax 和后端交互数据的 todo
//
//
// todo 后端程序提供了 4 个 API, 说明如下
//
//
// 1, 获得所有的 todo, 返回的是一个数组
//
// GET
// http://vip.cocode.cc:3000/todo/<你的qq号>/all
//
//
// 2, 发送 JSON 格式字符串来创建一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/<你的qq号>/add
//
//
// 3, 发送 JSON 格式字符串来更新一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/<你的qq号>/update/<todo_id>
//
//
// 4, 删除一个 todo
// GET
// http://vip.cocode.cc:3000/todo/<你的qq号>/delete/<todo_id>
//