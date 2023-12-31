import * as React from "react";
import Wizard from "@cloudscape-design/components/wizard";
import {Container, FormField, Input, SpaceBetween, Header, Link, Box, ColumnLayout, Button} from "@cloudscape-design/components";


export default () => {
    const [
        activeStepIndex,
        setActiveStepIndex
    ] = React.useState(0);
    return (
        <Wizard
            i18nStrings={{
                stepNumberLabel: stepNumber =>
                    `Step ${stepNumber}`,
                collapsedStepsLabel: (stepNumber, stepsCount) =>
                    `Step ${stepNumber} of ${stepsCount}`,
                skipToButtonLabel: (step, stepNumber) =>
                    `Skip to ${step.title}`,
                navigationAriaLabel: "Steps",
                cancelButton: "Cancel",
                previousButton: "Previous",
                nextButton: "Next",
                submitButton: "Launch instance",
                optional: "optional"
            }}
            onNavigate={({ detail }) =>
                setActiveStepIndex(detail.requestedStepIndex)
            }
            activeStepIndex={activeStepIndex}
            allowSkipTo
            steps={[
                {
                    title: "Choose instance type",
                    info: <Link variant="info">Info</Link>,
                    description:
                        "Each instance type includes one or more instance sizes, allowing you to scale your resources to the requirements of your target workload.",
                    content: (
                        <Container
                            header={
                                <Header variant="h2">
                                    Form container header
                                </Header>
                            }
                        >
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="First field">
                                    <Input />
                                </FormField>
                                <FormField label="Second field">
                                    <Input />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    )
                },
                {
                    title: "Add storage",
                    content: (
                        <Container
                            header={
                                <Header variant="h2">
                                    Form container header
                                </Header>
                            }
                        >
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="First field">
                                    <Input />
                                </FormField>
                                <FormField label="Second field">
                                    <Input />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    ),
                    isOptional: true
                },
                {
                    title: "Configure security group",
                    content: (
                        <Container
                            header={
                                <Header variant="h2">
                                    Form container header
                                </Header>
                            }
                        >
                            <SpaceBetween direction="vertical" size="l">
                                <FormField label="First field">
                                    <Input />
                                </FormField>
                                <FormField label="Second field">
                                    <Input />
                                </FormField>
                            </SpaceBetween>
                        </Container>
                    ),
                    isOptional: true
                },
                {
                    title: "Review and launch",
                    content: (
                        <SpaceBetween size="xs">
                            <Header
                                variant="h3"
                                actions={
                                    <Button
                                        onClick={() => setActiveStepIndex(0)}
                                    >
                                        Edit
                                    </Button>
                                }
                            >
                                Step 1: Instance type
                            </Header>
                            <Container
                                header={
                                    <Header variant="h2">
                                        Container title
                                    </Header>
                                }
                            >
                                <ColumnLayout
                                    columns={2}
                                    variant="text-grid"
                                >
                                    <div>
                                        <Box variant="awsui-key-label">
                                            First field
                                        </Box>
                                        <div>Value</div>
                                    </div>
                                    <div>
                                        <Box variant="awsui-key-label">
                                            Second Field
                                        </Box>
                                        <div>Value</div>
                                    </div>
                                </ColumnLayout>
                            </Container>
                        </SpaceBetween>
                    )
                }
            ]}
        />
    );
}
