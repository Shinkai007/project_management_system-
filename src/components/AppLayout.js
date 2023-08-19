import {AppLayout} from "@cloudscape-design/components";
import React, { useState } from 'react';
import ContentLayout from "./ContentLayout";

export default () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [toolsOpen, setToolsOpen] = useState(false);



    // 处理导航切换事件
    const handleNavigationChange = (detail) => {
        setNavigationOpen(detail.open);
    };

    // 处理工具切换事件
    const handleToolsChange = (detail) => {
        setToolsOpen(detail.open);
    };

    return (
        <AppLayout
            navigationOpen={navigationOpen}
            toolsOpen={toolsOpen}
            onNavigationChange={handleNavigationChange}
            onToolsChange={handleToolsChange}
            content={<ContentLayout/>}
        >
            {/* 可以在此添加其他插槽内容，如内容、导航、工具等 */}
        </AppLayout>
    );
}

