/**
 * 用于设置一些公开应用程序中的配置，这些变量可以再项目中通过 useAppConfig() 获取
 */
export default defineAppConfig({
  foo: '我是全局变量foo的值',
  theme: {
    primaryColor: '#ababab'
  }
})