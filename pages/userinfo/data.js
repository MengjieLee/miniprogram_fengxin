const totalRegionData = {
  'A 区': {
    'a1 街道': ['a1-1 社区', 'a1-2 社区', 'a1-3 社区'],
    'a2 街道': ['a2-1 社区', 'a2-2 社区'],
    'a3 街道': ['a3-1 社区'],
  },
  'B 区': {
    'b1 街道': ['b1-1 社区', 'b1-2 社区'],
    'b2 街道': ['b2-1 社区', 'b2-2 社区'],
    'b3 街道': ['b3-1 社区', 'b3-2 社区', 'b3-3 社区', 'b3-4 社区'],
  },
  'C 区': {
    'c1 街道': ['c1-1', 'c1-2'],
    'c2 街道': ['c2-1'],
  }
}


const totalPoliticsData = [{
    label: '群众',
    value: '群众'
  },
  {
    label: '共青团员',
    value: '共青团员'
  },
  {
    label: '中共党员(含预备党员)',
    value: '中共党员(含预备党员)'
  },
  {
    label: '民主党派人士',
    value: '民主党派人士'
  },
]


const totalJobData = [{
    label: '个体户',
    value: '个体户'
  },
  {
    label: '企业职员',
    value: '企业职员'
  },
  {
    label: '教师',
    value: '教师'
  },
  {
    label: '学生',
    value: '学生'
  },
  {
    label: '自由职业',
    value: '自由职业'
  },
]


module.exports = {
  totalRegionData,
  totalPoliticsData,
  totalJobData,
};