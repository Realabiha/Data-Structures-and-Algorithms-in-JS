# babel [掘金](https://juejin.im/post/5a79adeef265da4e93116430#heading-12)
**作用** 
- 将ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
**配置**
``` js
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"],
  "env": {
    "development":{
      "plugins": ["dynamic-import-node"]
    }
  }
}
// `preset(预设)` array  
// env
"presets": [
    [
        "env", 
        options
    ],
    "stage-2"
]
// eg env
"presets": [
    [
        "env", 
        {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }
    ],
    "stage-2"
],
// 官方预设 "@babel/preset-env"
"presets": [
		[
			"@babel/preset-env", 
			{
				"targets": {"node": "current"}
			}
		]
	],
// `plugin(插件)` array
"plugins": [
    "syntax-dynamic-import",["transform-runtime"]
]
// `ignore(忽略项)` array
"ignore":["./module/a.js"]
// `minified(编译后是否压缩)` boolean
"minified": false
// `comments(是否保留注释)` boolean
"comments": false
// `env(环境变量NODE_ENV)` object
"env": {
    // test 是提前设置的环境变量，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development
    "test": {
      "presets": ["env", "stage-2"],
      // instanbul是一个用来测试转码后代码的工具
      "plugins": ["istanbul"]
    }
}
```
# jest
**facebook出的测试**
**jest25.0支持node8.0**
**jest25.0+支持node10.0+**
**npx jest -v测试安装是否成功支持node5.2+**
[官方文档](https://jestjs.io/docs/zh-Hans/getting-started.html#%E4%BD%BF%E7%94%A8-babel)
