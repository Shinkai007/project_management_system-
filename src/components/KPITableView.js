import React, {useState} from 'react';
import Table from "@cloudscape-design/components/table";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Header from "@cloudscape-design/components/header";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";
import {KPIItems} from '../allData'
import {useCollection} from '@cloudscape-design/collection-hooks';
import {columnDefinitions, getMatchesCountText, paginationLabels} from '../tableConfig';
export default () => {
    // Preference的预设值
    const [preferences, setPreferences] = useState({
        pageSize: 10,
        visibleContent: ['id', 'title', 'level', 'state', 'category', 'deadline']
    });
    // 异步加载
    const [isLoaded, setIsLoaded] = React.useState(true)
    const loading = async () => {
        // 异步加载数据
        console.log(`异步加载`);
        if (KPIItems) {
            console.log('获取到了KPIItems');
            setIsLoaded(false)
        }
    }
    React.useEffect(() => {
        loading().then(r => r)
    }, [])

    // 定义空状态
    function EmptyState({title, subtitle, action}) {
        return (
            <Box textAlign="center" color="inherit">
                <Box variant="strong" textAlign="center" color="inherit">
                    {title}
                </Box>
                <Box variant="p" padding={{bottom: 's'}} color="inherit">
                    {subtitle}
                </Box>
                {action}
            </Box>
        );
    }
    //列选项
    const columnOptions = [
        { id: 'id', label: 'ID' },
        { id: 'title', label: 'Title' },
        { id: 'level', label: 'Level' },
        { id: 'state', label: 'State' },
        { id: 'category', label: 'Category' },
        { id: 'deadline', label: 'Deadline' }
    ];
    //用户自定义表格选项
    const collectionPreferencesProps = {
        visibleContentPreference: {
            title: 'Select visible columns',
            options: [
                {
                    label: 'Main properties',
                    options: columnOptions
                }
            ]
        },
        pageSizePreference: {
            title: 'Select page size',
            options: [
                { value: 10, label: '10 items' },
                { value: 20, label: '20 items' }
            ]
        },
        title:'Preference',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel'
    };


    // useCollection hook
    const {items, actions, filteredItemsCount, collectionProps, filterProps, paginationProps} = useCollection(
        KPIItems,
        {
            filtering: {
                empty: <Box textAlign="center" color="inherit"><b>No resources</b><Button>Create
                    resource</Button></Box>,
                noMatch: (
                    <EmptyState
                        title="No matches"
                        action={<Button onClick={() => actions.setFiltering('')}>Clear filter</Button>}
                    />
                ),
            },
            pagination: {pageSize: preferences.pageSize},
            sorting: {},
            selection: {},
        }
    );

    const {selectedItems} = collectionProps;


    return (

        <Table
            {...collectionProps}
            selectionType="single"
            header={
                <Header
                    counter={selectedItems.length ? `(${selectedItems.length}/${KPIItems.length})` : `(${KPIItems.length})`}
                >
                    KPI Table
                </Header>
            }
            columnDefinitions={columnDefinitions}
            visibleColumns={preferences.visibleContent}
            items={items}
            pagination={<Pagination {...paginationProps} ariaLabels={paginationLabels}/>}
            filter={
                <TextFilter
                    {...filterProps}
                    countText={getMatchesCountText(filteredItemsCount)}
                    filteringPlaceholder="Find resources"
                />
            }
            preferences={
                <CollectionPreferences
                    {...collectionPreferencesProps}
                    preferences={preferences}
                    onConfirm={({ detail }) => setPreferences(detail)}
                />
            }
            loading={isLoaded}
            loadingText="Loading resources"
            resizableColumns
            sortingDisabled={false}
            stickyHeader
            stripedRows
            wrapLines={false}

        />
    );
}
