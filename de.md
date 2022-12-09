# Node中的作用域
1. Node中没有全局作用域，只有`模块作用域`  （即文件作用域。文件A中require了文件B，文件A依然无法引用文件B的变量和方法  ----- 只有模块作用域），但是可以通过`exports`导出
2. 通过require方法加载执行其他文件 或 其他核心模块 fs path

# IP Vs Prot
1. `IP`地址用来`定位计算机`
2. `端口号`用来定位`具体的应用程序`（所有需要联网的应用程序都会占用一个端口号）


# 客户端渲染Vs服务端渲染
1. 客户端渲染
- Server向Browser发送View
- Browser收到View之后对其进行解析，解析到Ajax后，又向Server发出请求Data
（Browser拿到data后自己进行渲染 ———— 客户端渲染）
`至少需要两次请求`
2. 服务端渲染
- Server直接运用template.render 将data渲染进View中，直接一次发给Browser
`一次请求即可`

3. 如何选择？
`考虑SEO`的话用`服务端渲染`，不考虑SEO但`考虑用户体验` 用客户端渲染（异步渲染）

tip：服务端渲染更加利于SEO，例如京东的商品列表页面，而它的商品评论为了用户体验，而且不需要SEO优化，所以采用的客户端渲染