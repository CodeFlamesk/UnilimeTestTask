import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Overview from '@pages/PageOverview/Overview';
import Users from '@pages/PageUsers/Users';
import Settings from '@pages/PageSettings/Settings';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Navigate to="/overview" replace />} />
                <Route path="overview" element={<Overview />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
