// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BasicLayout from './layouts/BasicLayout';
import LibManagement from './pages/LibManagement';
import LibBorrow from './pages/LibBorrow';
import LibRecommend from './pages/LibRecommend';
import LibDonation from './pages/LibDonation';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: BasicLayout,
    component: LibManagement,
  },
  {
    path: '/link2',
    layout: BasicLayout,
    component: LibBorrow,
  },
  {
    path: '/link3',
    layout: BasicLayout,
    component: LibRecommend,
  },
  {
    path: '/link4',
    layout: BasicLayout,
    component: LibDonation,
  },
  {
    path: '*',
    layout: BasicLayout,
    component: NotFound,
  },
];

export default routerConfig;
