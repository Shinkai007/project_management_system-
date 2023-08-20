import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import BreadcrumbGroup from "./Breadcrumb"
import {useLocation,} from "react-router-dom";
import {StatusIndicator} from "@cloudscape-design/components";
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";
import {v4 as uuidv4} from 'uuid';


export default () => {

    // Value和label的组件
    const ValueWithLabel = ({label, children}) => (
        <>
            <Box variant="awsui-key-label">{label}</Box>
            <div>{children}</div>
        </>
    );
    //获取KPItable传递过来的数据
    const location = useLocation();
    // console.log("EventDetail location:", location.state);
    const e = location?.state?.event

    // 表格的选择数据配置
    const [
        selectedItems,
        setSelectedItems
    ] = React.useState([]);


    const [projects, setProjects] = React.useState([
        //...你的项目数据
        {id: uuidv4(), name: "Project Alpha", alt: "A web application for inventory management"},
        {id: uuidv4(), name: "Project Beta", alt: "A mobile application for fitness tracking"},
        {id: uuidv4(), name: "Project Gamma", alt: "A machine learning model for image recognition"}
    ]);

    const [steps, setSteps] = React.useState([
        //...你的步骤数据
        {id: uuidv4(), name: "Initialize Project", alt: "Start the project setup and initialize repositories"},
        {id: uuidv4(), name: "Design Review", alt: "Review design documents and finalize the UI/UX"},
        {id: uuidv4(), name: "Development Phase", alt: "Coding and unit testing of the modules"},
        {id: uuidv4(), name: "QA Testing", alt: "Quality assurance testing and bug fixing"},
        {id: uuidv4(), name: "Deployment", alt: "Deploy the application to the production server"}
    ]);

    const [members, setMembers] = React.useState([
        //...你的成员数据
        {
            id: uuidv4(),
            name: "Alice", alt: "Project Manager - Oversees the entire project"
        },
        {id: uuidv4(), name: "Bob", alt: "Developer - Works on frontend and backend development"},
        {id: uuidv4(), name: "Charlie", alt: "Designer - Creates UI/UX designs"},
        {id: uuidv4(), name: "David", alt: "Tester - Tests the application for bugs"}
    ]);

    //创建state, 来进行响应式
    const [selectedProjects, setSelectedProjects] = React.useState([]);
    const [selectedSteps, setSelectedSteps] = React.useState([]);
    const [selectedMembers, setSelectedMembers] = React.useState([]);

    //定义表格的列
    const tableColumns = [
        {
            id: "name",
            header: "Name",
            cell: item => item.name,
            sortingField: "name",
            isRowHeader: true
        },
        {
            id: "description",
            header: "Description",
            cell: item => item.alt,
            sortingField: "alt"
        }
    ];

    //高阶函数优化handler
    function createTableHandlers(data, setData, selected, setSelected) {
        return {
            addNewItem: (newItem) => {
                setData(prevData => [...prevData, newItem]);
            },

            editSelectedItem: (editedItem) => {
                if (selected.length > 0) {
                    setData(prevData => prevData.map(item => item.id === selected[0].id ? editedItem : item));
                }
            },

            deleteSelectedItem: () => {
                if (selected.length > 0) {
                    setData(prevData => prevData.filter(item => item.id !== selected[0].id));
                    setSelected([]);
                }
            }
        }
    }


//创建三个表格的handler
    const projectsHandlers = createTableHandlers(projects, setProjects, selectedProjects, setSelectedProjects);
    const stepsHandlers = createTableHandlers(steps, setSteps, selectedSteps, setSelectedSteps);
    const membersHandlers = createTableHandlers(members, setMembers, selectedMembers, setSelectedMembers);


    return (
        <ContentLayout
            header={
                <>
                    <Header>
                        <BreadcrumbGroup/>
                    </Header>
                    <Header
                        variant="h1"
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button>Secondary button</Button>
                                <Button variant="primary">
                                    Primary button
                                </Button>
                            </SpaceBetween>
                        }
                    >
                        event: {e.title}
                    </Header>
                </>
            }
        >
            <Container header={<Header headingTagOverride="h3">Event attribute</Header>}>
                <SpaceBetween size="xxl" direction="horizontal">
                    <ValueWithLabel label="id">{e.id}</ValueWithLabel>
                    <span key="divider1">|</span>
                    <ValueWithLabel label="level">{e.level}</ValueWithLabel>
                    <span key="divider2">|</span>
                    <ValueWithLabel label="state">
                        {e.state === '已完成' ? <StatusIndicator>{e.state}</StatusIndicator> :
                            <StatusIndicator type={"error"}>{e.state}</StatusIndicator>}
                    </ValueWithLabel>
                    <span key="divider3">|</span>
                    <ValueWithLabel label="category">{e.category}</ValueWithLabel>
                    <span key="divider4">|</span>
                    <ValueWithLabel label="deadline">{e.deadline}</ValueWithLabel>
                </SpaceBetween>
            </Container>

            <Table
                // 修改选中信息
                onSelectionChange={({detail}) => setSelectedProjects(detail.selectedItems)}
                selectedItems={selectedProjects}
                columnDefinitions={tableColumns}
                items={projects}
                sortingDisabled
                loadingText="Loading resources"
                selectionType="single"
                trackBy="id"
                empty={
                    <Box
                        margin={{vertical: "xs"}}
                        textAlign="center"
                        color="inherit"
                    >
                        <SpaceBetween size="m">
                            <b>No resources</b>
                            <Button>Create resource</Button>
                        </SpaceBetween>
                    </Box>
                }
                header={
                    <Header
                        variant="h1"
                        counter={
                            `(${projects.length})`
                        }
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button onClick={() => projectsHandlers.addNewItem({
                                    id: uuidv4(),
                                    name: "New Project",
                                    alt: "Description for new project"
                                })}>Create Project</Button>
                                <Button onClick={() => projectsHandlers.editSelectedItem({
                                    id: uuidv4(),
                                    name: "Edited Project",
                                    alt: "Edited Description"
                                })} disabled={selectedProjects.length === 0}>Edit</Button>
                                <Button onClick={projectsHandlers.deleteSelectedItem}
                                        disabled={selectedProjects.length === 0}>Delete</Button>
                            </SpaceBetween>
                        }
                    >
                        projects
                    </Header>
                }
            />

            <Table
                // 修改选中信息.
                onSelectionChange={({detail}) => setSelectedMembers(detail.selectedItems)}
                selectedItems={selectedMembers}
                sortingDisabled
                columnDefinitions={tableColumns}
                items={members}
                loadingText="Loading resources"
                selectionType="single"
                trackBy="id"
                empty={
                    <Box
                        margin={{vertical: "xs"}}
                        textAlign="center"
                        color="inherit"
                    >
                        <SpaceBetween size="m">
                            <b>No resources</b>
                            <Button>Create resource</Button>
                        </SpaceBetween>
                    </Box>
                }
                header={
                    <Header
                        variant="h1"
                        counter={
                            `(${members.length})`
                        }
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button onClick={() => membersHandlers.addNewItem({
                                    id: uuidv4(),
                                    name: "New Member",
                                    alt: "Description for new member"
                                })}>Create Member</Button>
                                <Button onClick={() => membersHandlers.editSelectedItem({
                                    id: uuidv4(),
                                    name: "Edited Member",
                                    alt: "Edited Description for Member"
                                })} disabled={selectedMembers.length === 0}>Edit</Button>
                                <Button onClick={membersHandlers.deleteSelectedItem}
                                        disabled={selectedMembers.length === 0}>Delete</Button>
                            </SpaceBetween>

                        }
                    >
                        Members
                    </Header>
                }
            />
            <Table
                onSelectionChange={({detail}) => setSelectedSteps(detail.selectedItems)}
                selectedItems={selectedSteps}
                columnDefinitions={tableColumns}
                items={steps}
                sortingDisabled
                loadingText="Loading resources"
                selectionType="single"
                trackBy="id"
                empty={
                    <Box
                        margin={{vertical: "xs"}}
                        textAlign="center"
                        color="inherit"
                    >
                        <SpaceBetween size="m">
                            <b>No resources</b>
                            <Button>Create resource</Button>
                        </SpaceBetween>
                    </Box>
                }
                header={
                    <Header
                        variant="h1"
                        counter={
                            `(${steps.length})`
                        }
                        actions={
                            <SpaceBetween direction="horizontal" size="xs">
                                <Button onClick={() => stepsHandlers.addNewItem({
                                    id: uuidv4(),
                                    name: "New Step",
                                    alt: "Description for new step"
                                })}>Create Step</Button>
                                <Button onClick={() => stepsHandlers.editSelectedItem({
                                    id: uuidv4(),
                                    name: "Edited Step",
                                    alt: "Edited Description for Step"
                                })} disabled={selectedSteps.length === 0}>Edit</Button>
                                <Button onClick={stepsHandlers.deleteSelectedItem}
                                        disabled={selectedSteps.length === 0}>Delete</Button>
                            </SpaceBetween>

                        }
                    >
                        Steps
                    </Header>
                }
            />
        </ContentLayout>
    );
}
