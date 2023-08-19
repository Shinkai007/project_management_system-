import * as React from 'react';
import {  Link } from 'react-router-dom';

export function getMatchesCountText(count) {
    return count === 1 ? `1 match` : `${count} matches`;
}

export const columnDefinitions = [
    {
        id: "id",
        header: "id",
        cell: e => {
            console.log("Link state:", { event: e });
            return(
                <Link
                    to={{
                        pathname: `/kpi/event/${e.id}`,
                        state: '1231231231'
                    }}
                >
                    {e.id}
                </Link>
            )
        },
        width: 110,
        minWidth: 110,
        sortingField: "id",
    },
    {
        id: "title",
        header: "title",
        cell: e => e.title,
        width: 170,
        minWidth: 165,
        sortingField: "title",
        isRowHeader: true,
    },
    {
        id: "level",
        header: "level",
        cell: e => e.level,
        width: 110,
        minWidth: 90,
        sortingField: "level",
    },
    {
        id: "state",
        header: "state",
        cell: e => e.state,
        width: 200,
        minWidth: 170,
        sortingField: "state",
    },
    {
        id: "category",
        header: "category",
        cell: e => e.category,
        width: 200,
        minWidth: 170,
        sortingField: "category",
    },
    {
        id: "deadline",
        header: "deadline",
        cell: e => e.deadline,
        width: 200,
        minWidth: 170,
        sortingField: "deadline",
    }
];

export const paginationLabels = {
    nextPageLabel: 'Next page',
    pageLabel: pageNumber => `Go to page ${pageNumber}`,
    previousPageLabel: 'Previous page',
};

const pageSizePreference = {
    title: 'Select page size',
    options: [
        { value: 10, label: '10 resources' },
        { value: 20, label: '20 resources' },
    ],
};

const visibleContentPreference = {
    title: 'Select visible content',
    options: [
        {
            label: 'Main properties',
            options: columnDefinitions.map(({ id, header }) => ({ id, label: header, editable: id !== 'id' })),
        },
    ],
};
export const collectionPreferencesProps = {
    pageSizePreference,
    visibleContentPreference,
    cancelLabel: 'Cancel',
    confirmLabel: 'Confirm',
    title: 'Preferences',
};
