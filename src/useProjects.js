import { useEffect, useState } from 'react';
import faker from 'faker';

// 在组件外部进行检查和初始化
console.log('useProjects called')
if (!localStorage.getItem('projects')) {
    const initialProjects = Array.from({ length: 10 }, generateProject);
    localStorage.setItem('projects', JSON.stringify(initialProjects));
}

export default function useProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem('projects'));
        setProjects(storedProjects);
        console.log(storedProjects);
    }, []);
    return projects;
}

//检索项目
// JSON.parse(localStorage.getItem('projects')
//更新项目
// const updatedProject = { ...retrievedProject, name: 'New Project Name' };
// localStorage.setItem('project', JSON.stringify(updatedProject));
//删除项目
//localStorage.removeItem('project');

function generateProject() {
    return {
        id: faker.datatype.uuid(), // 唯一标识符
        name: faker.company.companyName(), // 项目名称
        description: faker.commerce.productDescription(), // 项目描述
        deliveryDate: faker.date.future(), // 交付日期
        teamMembers: Array.from({ length: 5 }, () => faker.internet.userName()), // 团队成员ID
        status: faker.random.arrayElement(['筹备中', '已启动', '已交付', '维护期', '已结束']), // 状态
        kpis: Array.from({ length: 3 }, () => faker.datatype.uuid()), // 关联KPIs的ID
    };
}
