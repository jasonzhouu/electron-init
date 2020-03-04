electron 用的是 4.0 版，因为 5.0 版之后安全条例更改了，使得无法在渲染进程引入 electron 包。
这个项目在打包时，使用 [webpack-node-externals](https://www.npmjs.com/package/webpack-node-externals) 将electron排除在外，以免打包失败。因为 electron 用到了 nodejs 的 fs 模块，这是无法打包到渲染进程的。
在渲染进程，electron 是不必打包的，因为渲染进程的运行环境会提供 electron。