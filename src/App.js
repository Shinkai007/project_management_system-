import {useState} from "react";
import useProjects from './useProjects';
import {
    AppLayout,
    Box,
    ContentLayout,
    CopyToClipboard,
    Header,
    HelpPanel,
    SegControl,
    Wizard,
    AttributeEditor,
    CodeEditor,
    KPITableView
} from './components'

export default function App() {
    console.log('App rendered')
    const [value, setValue] = useState("");
    const projects = useProjects();

    return (
        <KPITableView></KPITableView>
    );
}
