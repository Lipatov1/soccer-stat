import { QueryClient, QueryClientProvider } from 'react-query'
import Leagues from './components/screens/leagues/Leagues';
import League from './components/screens/league/League';
import NotFound from './components/screens/not-found/NotFound';
import Teams from './components/screens/teams/Teams';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Team from './components/screens/team/Team';
import locale from 'antd/es/locale/ru_RU';
import { ConfigProvider } from "antd";
import 'antd/dist/reset.css';
import {FC} from 'react';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})



const App: FC = () => {
    return (
        <ConfigProvider
            locale={locale}
            theme={{
                token: {
                    colorBgLayout: '#12121a',
                    // colorBgLayout: 'linear-gradient(90deg, rgb(72, 61, 104) 0%, rgb(13, 85, 107) 50%, rgb(6, 41, 44) 100%)',
                    colorBgBase: '#262631',
                    colorTextBase: '#ffffff',
                    fontSize: 18,
                    colorPrimary: '#7f6fd1',
                    // borderRadius: 10,
                },
            }}
        >
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="leagues" element={<Leagues />}/>
                        <Route path="leagues/:id" element={<League />}/>
                        <Route path="teams" element={<Teams />}/>
                        <Route path="teams/:id" element={<Team />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Route>
                </Routes>
            </QueryClientProvider>
        </ConfigProvider>
    );
};

export default App;
