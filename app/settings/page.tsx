"use client";
import useSWR from "swr"
import { GetPlugins } from "@/apis/backend"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import React, { useState } from 'react';
import {
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ETS2LAPage } from "@/components/page/page"
import { translate } from "@/apis/translation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import RenderPage from "@/components/page/render_page"
import ControlsPage from "./controls/page";
import { motion } from "framer-motion";
import { ACTIONS, EVENTS, ORIGIN, STATUS, CallBackProps } from 'react-joyride';
import { JoyRideNoSSR } from "@/components/joyride-no-ssr";
import { useEffect } from "react";

export default function Home() {
    const { data } = useSWR("plugin_ui_plugins", () => GetPlugins());
    const [selectedPlugin, setSelectedPlugin] = useState("Global")
    const [hasDoneOnboarding, setHasDoneOnboarding] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

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
    });

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
            <div className="h-full font-geist rounded-lg bg-background p-4">
                <div className="flex flex-col gap-2 p-5 pt-[10px]">
                    <h2 className="text-lg font-bold">{translate("frontend.settings")}</h2>
                    <Separator className="translate-y-4" />
                </div>
                <div className="h-full pt-0 p-1 overflow-auto">
                    <TooltipProvider>
                        <ResizablePanelGroup direction="horizontal" className="text-center gap-4 pr-4 h-full">
                            <ResizablePanel defaultSize={25}>
                                <ScrollArea className="h-full pt-4 relative" type="hover">
                                    <div className="absolute bottom-0 z-10 right-0 top-0 w-12 bg-linear-to-l from-background pointer-events-none" />
                                    <div className="flex flex-col gap-2 text-start relative">
                                        <div className="flex flex-col gap-2 text-start relative p-0 pb-8" id="static_settings">
                                            <Button key={"Global"} className="items-center justify-start text-sm rounded-r-none" variant={selectedPlugin == "Global" && "secondary" || "ghost"} onClick={() => setSelectedPlugin("Global")}>
                                                {translate("frontend.settings.global")}
                                            </Button>
                                            <Button key={"Controls"} className="items-center justify-start text-sm rounded-r-none" variant={selectedPlugin == "Controls" && "secondary" || "ghost"} onClick={() => setSelectedPlugin("Controls")}>
                                                {translate("frontend.settings.controls")}
                                            </Button>
                                            <Button key={"SDK"} className="items-center justify-start text-sm rounded-r-none" variant={selectedPlugin == "SDK" && "secondary" || "ghost"} onClick={() => setSelectedPlugin("SDK")} id="open_sdk_settings">
                                                SDK
                                            </Button>
                                        </div>
                                        <div className="flex flex-col gap-2 text-start relative p-0" id="plugin_settings">
                                            {plugins.map((plugin:any, index) => (
                                                plugin == "Separator" ? <br key={index} /> : 
                                                plugin == "Global" ? null : // @ts-ignore
                                                data && data[plugin] && data[plugin].settings ?
                                                <div className="items-center justify-start text-sm">
                                                    <Tooltip>
                                                        <TooltipTrigger className="items-center justify-start text-sm w-full">
                                                            <Button key={index} className="items-center justify-start text-sm w-full rounded-r-none" variant={selectedPlugin == plugin && "secondary" || "ghost"} onClick={() => setSelectedPlugin(plugin)}>
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
                                    </div>
                                </ScrollArea>
                            </ResizablePanel>
                            <ResizablePanel defaultSize={75} className="h-full w-full relative">
                                <ScrollArea className="h-full" type="hover">
                                    <div className="h-4" />
                                    {renderPluginPage()}
                                </ScrollArea>
                                <div className="absolute h-4 top-0 left-0 right-0 bg-linear-to-b from-background pointer-events-none" />
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </TooltipProvider>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-background pointer-events-none" />
                </div>
            </div>
        </>
    )
}