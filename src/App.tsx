import Layout from "./components/Layout/Layout";
import {Routes, Route} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import { ConfigProvider } from "antd";
import Leagues from "./pages/Leagues";
import League from "./pages/League";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import React, {FC} from 'react';
import 'antd/dist/reset.css';

const App: FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgLayout: '#12121a',
                    colorBgBase: '#262631',
                    colorTextBase: '#ffffff',
                    fontSize: 18,
                    colorPrimary: '#7f6fd1',

                    // colorBgMask: '#FF0000',
                    // colorBgContainer: '#FF0000',
                    // colorBorder: '#FF0000',
                    // colorBgElevated: '#FF0000',
                    // colorBgSpotlight: '#FF0000',
                    // colorBgContainerDisabled: '#FF0000',
                    // colorFill: '#FF0000',
                    // colorBorderBg: '#FF0000',
                    // colorBorderSecondary: '#FF0000',
                    // colorFillAlter: '#FF0000',
                    // colorFillContent: '#FF0000',
                    // colorFillQuaternary: '#FF0000',
                    // colorHighlight: '#FF0000',
                    // colorInfoBg: '#FF0000',
                    // colorLink: '#FF0000',
                    // colorSplit: '#FF0000',
                    // colorInfo: '#FF0000',
                    // colorPrimary: '#FF0000',
                    // colorPrimaryBg: '#FF0000',
                    // colorText: '#FF0000',
                    // colorError: '#FF0000',
                    // colorBgTextActive: '#FF0000',
                    // colorErrorBg: '#FF0000',
                    // colorBgTextHover: '#FF0000',
                    // colorErrorActive: '#FF0000',
                    // colorErrorBgHover: '#FF0000',
                    // colorErrorBorder: '#FF0000',
                    // colorErrorBorderHover: '#FF0000',
                    // colorErrorHover: '#FF0000',
                    // colorIcon: '#FF0000',
                    // colorErrorOutline: '#FF0000',
                    // colorErrorText: '#FF0000',
                    // colorErrorTextActive: '#FF0000',
                    // colorErrorTextHover: '#FF0000',
                    // colorFillContentHover: '#FF0000',
                    // colorFillSecondary: '#FF0000',
                    // colorFillTertiary: '#FF0000',
                    // colorIconHover: '#FF0000',
                    // colorInfoActive: '#FF0000',
                    // colorInfoBgHover: '#FF0000',
                    // colorInfoBorder: '#FF0000',
                    // colorInfoBorderHover: '#FF0000',
                    // colorInfoHover: '#FF0000',
                    // colorInfoText: '#FF0000',
                    // colorInfoTextActive: '#FF0000',
                    // colorInfoTextHover: '#FF0000',
                    // colorLinkHover: '#FF0000',
                    // colorLinkActive: '#FF0000',
                    // colorPrimaryActive: '#FF0000',
                    // colorPrimaryBgHover: '#FF0000',
                    // colorPrimaryBorder: '#FF0000',
                    // colorSuccess: '#FF0000',
                    // colorPrimaryBorderHover: '#FF0000',
                    // colorPrimaryHover: '#FF0000',
                    // colorPrimaryText: '#FF0000',
                    // colorPrimaryTextActive: '#FF0000',
                    // colorPrimaryTextHover: '#FF0000',
                    // colorSuccessActive: '#FF0000',
                    // colorSuccessBg: '#FF0000',
                    // colorSuccessBgHover: '#FF0000',
                    // colorSuccessBorder: '#FF0000',
                    // colorSuccessBorderHover: '#FF0000',
                    // colorSuccessHover: '#FF0000',
                    // colorSuccessText: '#FF0000',
                    // colorSuccessTextActive: '#FF0000',
                    // colorSuccessTextHover: '#FF0000',
                    // colorTextDescription: '#FF0000',
                    // colorTextDisabled: '#FF0000',
                    // colorTextHeading: '#FF0000',
                    // colorTextLabel: '#FF0000',
                    // colorWarning: '#FF0000',
                    // colorTextLightSolid: '#FF0000',
                    // colorWhite: '#FF0000',
                    // colorTextPlaceholder: '#FF0000',
                    // colorTextQuaternary: '#FF0000',
                    // colorTextSecondary: '#FF0000',
                    // colorTextTertiary: '#FF0000',
                    // colorWarningActive: '#FF0000',
                    // colorWarningBg: '#FF0000',
                    // colorWarningBgHover: '#FF0000',
                    // colorWarningBorder: '#FF0000',
                    // colorWarningBorderHover: '#FF0000',
                    // colorWarningHover: '#FF0000',
                    // colorWarningOutline: '#FF0000',
                    // colorWarningText: '#FF0000',
                    // colorWarningTextActive: '#FF0000',
                    // colorWarningTextHover: '#FF0000',
                    // controlItemBgActive: '#FF0000',
                    // controlItemBgActiveDisabled: '#FF0000',
                    // controlItemBgActiveHover: '#FF0000',
                    // controlItemBgHover: '#FF0000',
                    // head

                    // colorPrimary: '#00b96b',
                    // colorText: '#00b96b',
                    // borderRadius: 2,
                },
            }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="leagues" element={<Leagues />}/>
                    <Route path="leagues/:id" element={<League />}/>
                    <Route path="teams" element={<Teams />}/>
                    <Route path="teams/:id" element={<Team />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
        </ConfigProvider>
    );
};

export default App;
