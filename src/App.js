import {useState} from "react";
import useProjects from './useProjects';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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
    KPITableView,
    EventDetail
} from './components'

export default function App() {
    console.log('App rendered')
    const [value, setValue] = useState("");
    const projects = useProjects();

    return (
        <Router>
            <div>
                <Link to="/kpi">Go to KPI Table</Link>
                <Routes>
                    <Route path="/kpi" element={<KPITableView />} />
                    <Route path="/kpi/event/:id" element={<EventDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

