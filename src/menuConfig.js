// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

// ICON 配置： https://ice.alibaba-inc.com/component/foundationsymbol
const asideMenuConfig = [
  {
    name: 'Link1',
    path: '/',
    icon: 'home2',
  },
  {
    name: 'Link2',
    path: '/link2',
    icon: 'cascades',
  },
  {
    name: 'Link3',
    path: '/link3',
    icon: 'person',
  },
  {
    name: 'Link4',
    path: '/link4',
    icon: 'directory',
  },
];

export { headerMenuConfig, asideMenuConfig };
