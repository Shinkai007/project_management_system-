import {useState} from "react";
import useProjects from './useProjects';
import { BrowserRouter as Router, Route, Link, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';
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
    EventDetail,
    ProjectView
} from './components'

export default function App() {
    console.log('App rendered')
    const [value, setValue] = useState("");
    const projects = useProjects();


    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/projects" replace />} />
                    <Route path="/projects" element={<ProjectView/>}></Route>
                    <Route path="/kpi" element={<KPITableView />} />
                    <Route path="/kpi/event/:id" element={<EventDetail />} />
                </Routes>
            </div>
        </Router>
    );
}
