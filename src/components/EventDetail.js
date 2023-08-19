import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import SpaceBetween from "@cloudscape-design/components/space-between";
import BreadcrumbGroup from "./Breadcrumb"
import {useParams, useLocation} from "react-router-dom";
export default () => {

    const location = useLocation();
    console.log("EventDetail location:", location);

    const eventData = location.state?.event;

    if (!eventData) {
        return <div>No data available</div>;
    }

    return (
        <ContentLayout
            header={
                <SpaceBetween size="m">
                    <Header
                    >
                        <BreadcrumbGroup/>
                        <h1>event: {eventData.title}</h1>
                    </Header>
                </SpaceBetween>
            }
        >
            <Container
                header={
                    <Header
                        variant="h2"
                        description="Container description"
                    >
                        Container header
                    </Header>
                }
            >
                Container content
            </Container>
        </ContentLayout>
    );
}
