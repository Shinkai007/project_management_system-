import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';


// 获取随机状态
function getRandomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// 获取随机时间
function getRandomFutureDate(days) {
    const res = moment().add(Math.floor(Math.random() * days), 'days').toDate()
    const formattedDate = moment(res).format('YYYY-MM-DD HH:mm:ss');
    return formattedDate.toString();
}

// KPI状态
const states = ["未完成", "已完成", "被否决", "已过期", "存在问题"];
// category 分类的预设条目
const categories = ["Bug 修复", "功能开发", "会议", "原型开发", "KPI设计"]
// KPIItems
export const KPIItems = [
    {
        title: "Item 1",
        id: uuidv4(),
        level: 1,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
        {
            title: "Item 2",
            id: uuidv4(),
            level: 2,
            state: getRandomValue(states),
            category:getRandomValue(categories),
            deadline:getRandomFutureDate(30)
        },
        {
            title: "Item 3",
            id: uuidv4(),
            level: 3,
            state: getRandomValue(states),
            category:getRandomValue(categories),
            deadline:getRandomFutureDate(30)
        },
        {
            title: "Item 4",
            id: uuidv4(),
            level: 2,
            state: getRandomValue(states),
            category:getRandomValue(categories),
            deadline:getRandomFutureDate(30)
        },
        {
            title: "Item 5",
            id: uuidv4(),
            level: 5,
            state: getRandomValue(states),
            category:getRandomValue(categories),
            deadline:getRandomFutureDate(30)
        },
        {
            title: "Item 6",
            id: uuidv4(),
            level: 3,
            state: getRandomValue(states),
            category:getRandomValue(categories),
            deadline:getRandomFutureDate(30)
        },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    },
    {
        title: "Item 6",
        id: uuidv4(),
        level: 3,
        state: getRandomValue(states),
        category:getRandomValue(categories),
        deadline:getRandomFutureDate(30)
    }
    ]
