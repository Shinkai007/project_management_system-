import * as React from "react";
import SegmentedControl from "@cloudscape-design/components/segmented-control";

export default () => {
    const [selectedId, setSelectedId] = React.useState("seg-1");

    let content;
    switch (selectedId) {
        case "seg-1":
            content = <div>内容1</div>;
            break;
        case "seg-2":
            content = <div>内容2</div>;
            break;
        case "seg-3":
            content = <div>内容3</div>;
            break;
        default:
            content = <div>默认内容</div>;
    }

    return (
        <div>
            <SegmentedControl
                selectedId={selectedId}
                onChange={({ detail }) => setSelectedId(detail.selectedId)}
                label="Default segmented control"
                options={[
                    { text: "Segment 1", id: "seg-1" },
                    { text: "Segment 2", id: "seg-2" },
                    { text: "Segment 3", id: "seg-3" }
                ]}
            />
            {content} {/* 这里渲染选中选项卡对应的内容 */}
        </div>
    );
};
