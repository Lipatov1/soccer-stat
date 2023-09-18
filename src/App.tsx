import NotFound from './components/screens/not-found/NotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route, Navigate } from 'react-router-dom'
import Leagues from './components/screens/leagues/Leagues'
import League from './components/screens/league/League'
import Teams from './components/screens/teams/Teams'
import Team from './components/screens/team/Team'
import Layout from './components/layout/Layout'
import locale from 'antd/es/locale/ru_RU'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { FC } from 'react'

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
          colorBgBase: '#262631',
          colorTextBase: '#ffffff',
          colorPrimary: '#7f6fd1',
          fontSize: 18,
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="leagues" />} />
            <Route path="leagues" element={<Leagues />} />
            <Route path="leagues/:id" element={<League />} />
            <Route path="teams" element={<Teams />} />
            <Route path="teams/:id" element={<Team />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

export default App
