"use client";
import useSWR from "swr"
import { GetPlugins } from "@/apis/backend"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loading from './loading';

// 移除未使用的SettingsPage组件，保留Home组件作为唯一默认导出

import { ArrowLeft } from "lucide-react";
import {
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ETS2LAPage } from "@/components/page/page"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import RenderPage from "@/components/page/render_page"
import ControlsPage from "./controls/page";
import { motion, AnimatePresence } from "framer-motion";
import { ACTIONS, EVENTS, ORIGIN, STATUS, CallBackProps } from 'react-joyride';
import { JoyRideNoSSR } from "@/components/joyride-no-ssr";

import { translate, currentLanguage, changeLanguage, loadTranslations } from "@/apis/translation";

export default function Home() {
    const { data } = useSWR("plugin_ui_plugins", () => GetPlugins());
    const [selectedPlugin, setSelectedPlugin] = useState("Global")
    const [hasDoneOnboarding, setHasDoneOnboarding] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [loadingTranslations, setLoadingTranslations] = useState(false);
    // 添加语言切换动画状态
    const [isLanguageChanging, setIsLanguageChanging] = useState(false);
    // 添加布局状态控制变量
    const [isCompactLayout, setIsCompactLayout] = useState(false);
    const router = useRouter();
    const { data: language, isLoading: loadingLanguage } = useSWR("language", () => currentLanguage, { refreshInterval: 2000 });
    
    // 点击settings时切换到两栏布局，再次点击返回三栏布局
    const toggleLayout = () => {
        setIsCompactLayout(!isCompactLayout);
    };

    const STEPS = [
        {
            target: "#static_settings",
            content: translate("tutorials.settings.static"),
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#settings_page",
            content: translate("tutorials.settings.global"),
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#plugin_settings",
            content: translate("tutorials.settings.plugin"),
            placement: "right",
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#open_sdk_settings",
            content: translate("tutorials.settings.sdk"),
            placement: "right",
            disableBeacon: true,
            hideFooter: true,
        }
    ];

    useEffect(() => {
        const hasDoneOnboarding = localStorage.getItem("hasDoneSettingsOnboarding");
        setHasDoneOnboarding(hasDoneOnboarding === "true");
    }, []);

    const plugins:string[] = [];
    for (const key in data) {
        // Check if the key is a number
        if (isNaN(parseInt(key))){
            plugins.push(key)
        }
    }

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { action, index, origin, status, type } = data;
        
        // @ts-expect-error
        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
            setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
        } // @ts-expect-error
        else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            localStorage.setItem("hasDoneSettingsOnboarding", "true");
        }
    };

    const renderPluginPage = () => {
        if (selectedPlugin === "Global") {
            return <RenderPage url="/settings/global" />;
        } else if (selectedPlugin === "Controls") {
            return <ControlsPage />;
        } else if (selectedPlugin === "SDK") {
            return <RenderPage url="/setup/sdk" />;
            // @ts-ignore
        } else if (data && data[selectedPlugin] && data[selectedPlugin].settings) {
            // Ensure data is correctly passed to ETS2LASettingsPage
            // @ts-ignore
            return <ETS2LAPage plugin={selectedPlugin} data={data[selectedPlugin]["settings"]} enabled={data[selectedPlugin]["enabled"]} />;
        } else {
            return <p className="text-xs text-muted-foreground text-start pl-4">{translate("frontend.settings.data_missing")}</p>;
        }
    };

    useEffect(() => {
        if (language) {
            setLoadingTranslations(true);
            setIsLanguageChanging(true); // 开始语言切换动画
            
            // 显示加载页面
            const loadLanguage = async () => {
                try {
                    // 先显示加载动画一段时间，确保用户能看到
                    await new Promise(resolve => setTimeout(resolve, 300));
                    
                    await loadTranslations();
                    await changeLanguage(language);
                    
                    // 延迟关闭加载页面，确保动画流畅
                    setTimeout(() => {
                        setLoadingTranslations(false);
                        setIsLanguageChanging(false);
                    }, 1000); // 增加延迟时间，确保动画更流畅
                } catch (error) {
                    console.error('Error loading translations:', error);
                    setLoadingTranslations(false);
                    setIsLanguageChanging(false);
                }
            };
            
            loadLanguage();
        }
    }, [language]); // 添加 language 到依赖数组

    if (loadingTranslations || loadingLanguage) {
        return (
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-sidebar flex items-center justify-center flex-col gap-2" 
                key="loading" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <div className="spinner" />
                <p className="font-geist text-muted-foreground">
                    {translate("webpage.ui_loading")}
                </p>
            </motion.div>
        );
    }

    return (
        <>
            <JoyRideNoSSR // @ts-expect-error no clue why it's complaining on the steps
                steps={STEPS}
                run={!hasDoneOnboarding}
                stepIndex={stepIndex}
                spotlightPadding={5}
                styles={
                    {
                        options: {
                            backgroundColor: "#18181b",
                            arrowColor: "#18181b",
                            textColor: "#fafafa",
                        },
                        buttonClose: {
                            width: "8px",
                            height: "8px",
                        },
                        tooltipContent: {
                            fontSize: "14px",
                        }
                    }
                }
                callback={handleJoyrideCallback}
            />
            <div className="relative h-full">
                <motion.div 
                    className="h-full font-geist rounded-lg bg-background p-4"
                    initial={{ opacity: 1 }}
                    animate={{ 
                        opacity: isLanguageChanging ? 0.4 : 1,
                        filter: isLanguageChanging ? "blur(4px)" : "blur(0px)"
                    }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
                >
                <div className="flex flex-col gap-2 p-5 pt-[10px]">
                    <div className="flex items-center gap-3">
                        {isCompactLayout && (
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={toggleLayout}
                                className="transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground"
                                aria-label={translate("frontend.settings.back_to_three_columns")}
                            >
                                <ArrowLeft className="h-5 w-5" />
                                <span className="sr-only">{translate("frontend.settings.back_to_three_columns")}</span>
                            </Button>
                        )}
                        <h2 className="text-lg font-bold">{translate("frontend.settings")}</h2>
                    </div>
                    <Separator className="translate-y-4" />
                </div>
                <div className="h-full pt-0 p-1 overflow-auto">
                    <TooltipProvider>
                        <ResizablePanelGroup direction="horizontal" className="text-center gap-4 pr-4 h-full">
                            <AnimatePresence>
                                {!isCompactLayout && (
                                    <motion.div
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "25%", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ResizablePanel defaultSize={25}>
                                            <ScrollArea className="h-full pt-4 relative" type="hover">
                                                <div className="absolute bottom-0 z-10 right-0 top-0 w-12 bg-gradient-to-l from-background pointer-events-none" />
                                                <div className="flex flex-col gap-2 text-start relative">
                                                    <div className="flex flex-col gap-2 text-start relative p-0 pb-8" id="static_settings">
                                                        <Button 
                                                            key={"Global"} 
                                                            className="items-center justify-start text-sm rounded-r-none" 
                                                            variant={selectedPlugin == "Global" && "secondary" || "ghost"} 
                                                            onClick={() => {
                                                                setSelectedPlugin("Global");
                                                                setIsCompactLayout(true); // 切换到两栏布局
                                                            }}
                                                        >
                                                            {translate("frontend.settings.global")}
                                                        </Button>
                                                        <Button 
                                                            key={"Controls"} 
                                                            className="items-center justify-start text-sm rounded-r-none" 
                                                            variant={selectedPlugin == "Controls" && "secondary" || "ghost"} 
                                                            onClick={() => {
                                                                setSelectedPlugin("Controls");
                                                                setIsCompactLayout(true);
                                                            }}
                                                        >
                                                            {translate("frontend.settings.controls")}
                                                        </Button>
                                                        <Button 
                                                            key={"SDK"} 
                                                            className="items-center justify-start text-sm rounded-r-none" 
                                                            variant={selectedPlugin == "SDK" && "secondary" || "ghost"} 
                                                            onClick={() => {
                                                                setSelectedPlugin("SDK");
                                                                setIsCompactLayout(true);
                                                            }} 
                                                            id="open_sdk_settings"
                                                        >
                                                            SDK
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col gap-2 text-start relative p-0" id="plugin_settings">
                                                        {plugins.map((plugin:any, index) => (
                                                            plugin == "Separator" ? <br key={index} /> : 
                                                            plugin == "Global" ? null : // @ts-ignore
                                                            data && data[plugin] && data[plugin].settings ?
                                                            <div className="items-center justify-start text-sm" key={index}>
                                                                <Tooltip>
                                                                    <TooltipTrigger className="items-center justify-start text-sm w-full">
                                                                        <Button 
                                                                            className="items-center justify-start text-sm w-full rounded-r-none" 
                                                                            variant={selectedPlugin == plugin && "secondary" || "ghost"} 
                                                                            onClick={() => {
                                                                                setSelectedPlugin(plugin);
                                                                                setIsCompactLayout(true);
                                                                            }}
                                                                        >
                                                                            {// @ts-ignore
                                                                                translate(data[plugin].description.name)
                                                                            }
                                                                        </Button>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <div className="flex flex-col gap-2 text-start">
                                                                            <p className="text-xs text-start">
                                                                                {// @ts-ignore
                                                                                    translate(data[plugin].description.name)
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </TooltipContent>
                                                                </Tooltip> 
                                                            </div> : null
                                                        ))}
                                                    </div>
                                                    <br />
                                                    <p className="text-xs text-muted-foreground text-start pl-4">
                                                        {translate("frontend.settings.global_info")}
                                                    </p>
                                                </div>
                                            </ScrollArea>
                                        </ResizablePanel>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <motion.div 
                                className="h-full w-full"
                                initial={false}
                                animate={{ 
                                    width: isCompactLayout ? "100%" : "75%"
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <ResizablePanel defaultSize={isCompactLayout ? 100 : 75} className="h-full w-full relative">
                                    <ScrollArea className="h-full" type="hover">
                                        <div className="h-4" />
                                        {renderPluginPage()}
                                    </ScrollArea>
                                    <div className="absolute h-4 top-0 left-0 right-0 bg-gradient-to-b from-background pointer-events-none" />
                                </ResizablePanel>
                            </motion.div>
                        </ResizablePanelGroup>
                    </TooltipProvider>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background pointer-events-none" />
                </div>
            </motion.div>
                <AnimatePresence>
                    {isLanguageChanging && (
                        <motion.div
                            key="language-loading"
                            className="absolute inset-0 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Loading message={translate("frontend.changing_language")} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}