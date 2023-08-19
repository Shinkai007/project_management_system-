import * as React from "react";
import ContentLayout from "@cloudscape-design/components/content-layout";
import Box from "@cloudscape-design/components/box";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";

export default () => {
    return (
        <ContentLayout
            disableOverlap
            header={
                <SpaceBetween size="m">
                    <Header
                        variant="h1"
                        info={<Link>Info</Link>}
                        description="This is a generic description used in the header."
                        actions={
                            <Button variant="primary">Button</Button>
                        }
                    >
                        Header
                    </Header>

                    <Alert>This is a generic alert.</Alert>
                </SpaceBetween>
            }
        >
            <Box variant="h2">Content heading</Box>

            <Box variant="p">This is a content paragraph.</Box>
        </ContentLayout>
    );
}
