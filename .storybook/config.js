// //导入storybook的react包
// import { configure } from '@storybook/react';
// // 定义一个函数，函数内定义我们引用的stories的目录
// // 如果有多个目录，可以多次引入；
// // 这将从../stories/index.js载入stories。
// // 实际上可以从任何地方加载stories。
// function loadStories() {
//   require('../src/stories');
// }
// //配置我们引入的stories
// configure(loadStories, module);

import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);