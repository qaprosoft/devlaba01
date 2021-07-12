module.exports = [
  {
    method: 'get',
    path: '/sum',
    resolver: {
      controller: 'SumController',
      action: 'sum',
    },
  },
  {
    method: 'post',
    path: '/sum',
    resolver: {
      controller: 'SumController',
      action: 'makeSum',
    },
  },
  {
    method: 'get',
    path: '/substring',
    resolver: {
      controller: 'SubstringContoller',
      action: 'substring',
    },
  },
  {
    method: 'post',
    path: '/substring',
    resolver: {
      controller: 'SubstringContoller',
      action: 'getSubstringIndex',
    },
  },
  {
    method: 'get',
    path: '/reverse',
    resolver: {
      controller: 'ReverseController',
      action: 'reverse',
    },
  },
  {
    method: 'post',
    path: '/reverse',
    resolver: {
      controller: 'ReverseController',
      action: 'getReverseString',
    },
  },
];
