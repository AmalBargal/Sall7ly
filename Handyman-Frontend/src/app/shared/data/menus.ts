export interface Menu {
  path: string;
  name: string;
}

export const menuList: Menu[] = [
  {
    path: '/profile',
    name: 'My Profile'
  },
  {
    path: '/auth/requestHistory',
    name: 'Requests'
  },
  {
    path: '/upcoming-request',
    name: 'Pending Requests'
  }
];
