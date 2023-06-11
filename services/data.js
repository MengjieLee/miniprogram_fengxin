const totalRegionData = {
  'A 区': {
    'a1 街道': ['矿建社区', 'a1-2 社区', 'a1-3 社区'],
    'a2 街道': ['a2-1 社区', 'a2-2 社区'],
    'a3 街道': ['松湖社区'],
  },
  'B 区': {
    'b1 街道': ['b1-1 社区', 'b1-2 社区'],
    'b2 街道': ['b2-1 社区', 'b2-2 社区'],
    'b3 街道': ['保健巷社区', 'b3-2 社区', 'b3-3 社区', 'b3-4 社区'],
  },
  'C 区': {
    'c1 街道': ['c1-1', 'c1-2'],
    'c2 街道': ['c2-1'],
  }
}

const totalActivityData = [{
    task_name: '（矿建社区）岭南小区开展环境整治活动',
    task_date: '2023-06-08',
    task_period: '15:00 ~ 17:00',
    task_time_tag: '活动未开始',
    reward: 2,
    region: '矿建社区',
    location: '岭南小区',
    sponsor: '开心',
    phone: 18270201717,
    headcount: 15,
    recruited: 7,
    task_description: '展开环境整治活动展开环境整治活动展开环境整治活动展开环境整治活动',
    age_restriction: '65',
    notice: '无',
    state: 'not_start'
  },
  {
    task_name: '（松湖社区）各个小区双创行动',
    task_date: '2023-06-06',
    task_period: '16:30 ~ 18:00',
    task_time_tag: '活动已结束',
    reward: 4,
    region: '松湖社区',
    location: '松湖社区各个小区',
    sponsor: '开朗',
    phone: 18270201717,
    headcount: 50,
    recruited: 19,
    task_description: '展开双创活动',
    age_restriction: '60',
    notice: '无',
    state: 'finished'
  },
  {
    task_name: '（保健巷社区）义务献血活动',
    task_date: '2023-06-07',
    task_period: '15:00 ~ 24:00',
    task_time_tag: '活动进行中',
    reward: 1,
    region: '保健巷社区',
    location: '保健巷社区门口',
    sponsor: '壮壮',
    phone: 18270201717,
    headcount: 30,
    recruited: 8,
    task_description: '义务献血活动',
    age_restriction: '60',
    notice: '无',
    state: 'in_progress'
  },
]

const totalRegionArrayData = [{
  label: '所有社区',
  value: 'all'
}]
for (const distinct in totalRegionData) {
  for (const street in totalRegionData[distinct]) {
    const regionList = totalRegionData[distinct][street]
    regionList.forEach(region => {
      totalRegionArrayData.push({
        'label': region,
        'value': region,
      })
    })
  }
}

const totalStateArrayData = [{
    label: '活动状态不限',
    value: 'all'
  },
  {
    label: '活动未开始',
    value: 'not_start'
  },
  {
    label: '活动进行中',
    value: 'in_progress'
  },
  {
    label: '活动已结束',
    value: 'finished'
  },
]


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
  totalActivityData,
  totalRegionArrayData,
  totalStateArrayData,
  totalPoliticsData,
  totalJobData,
}