import * as React from "react";
import BreadcrumbGroup from "@cloudscape-design/components/breadcrumb-group";

export default () => {
    return (
        <BreadcrumbGroup
            items={[
                { text: "Projects", href: "#" },
                { text: "KPI Table", href: "#KPITable" },
                {
                    text: "Event Detail",
                    href: "#KPITable/"
                }
            ]}
            ariaLabel="Breadcrumbs"
        />
    );
}
