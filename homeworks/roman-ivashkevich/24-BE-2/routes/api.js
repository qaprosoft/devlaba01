module.exports = [
  {
    method: 'get',
    path: '/',
    resolver: {
      controller: 'WelcomeController',
      action: 'home',
    },
  },
  {
    method: 'get',
    path: '**404',
    resolver: {
      controller: 'WelcomeController',
      action: 'notFound',
    },
  },
  {
    method: 'get',
    path: '/sum',
    resolver: {
      controller: 'HomeworkController',
      action: 'sum',
    },
  },
  {
    method: 'get',
    path: '/substr',
    resolver: {
      controller: 'HomeworkController',
      action: 'substr',
    },
  },
  {
    method: 'get',
    path: '/reverse',
    resolver: {
      controller: 'HomeworkController',
      action: 'reverse',
    },
  },
];
