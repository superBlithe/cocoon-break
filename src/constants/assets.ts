

export const ASSETS = {
  IMAGES: {
    INDEX: {
      BG: 'indexBg',
    },
    MODAL: {
      BG: "modalBg"
    }
  },
  ANIMATIONS: {}
} as const
//    TypeScript 3.4 引入了一个名为 const 断言
//   该表达式中的字面类型不应被扩展（例如：不能从“hello”转换为字符串）
// 对象字面量获取只读属性
// 数组文字成为只读元组
