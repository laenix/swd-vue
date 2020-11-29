const swdRoutes = [
  {
    path: '/search',
    name: 'search',
    meta: {
      auth: true,
    },
    component: () => import('@/views/Search.vue'),
  },
];
export default swdRoutes;
