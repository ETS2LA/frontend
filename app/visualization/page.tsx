"use client";
import { motion } from "framer-motion";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import useSWR from "swr";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { useSidebar } from "@/components/ui/sidebar";

export default function Visualization() {
    const [ usePromods, setUsePromods ] = useState(false);
    const [ useMirror, setUseMirror ] = useState(false);
    const [ isVisualizationOpen, setIsVisualizationOpen ] = useState(false);
    const [ isMapOpen, setIsMapOpen ] = useState(false);
    const { open, setOpen } = useSidebar();
    const { theme } = useTheme();

    const map_link = "https://map.ets2la.com";
    const visualization_link = "https://visualization.ets2la.com?theme=" + theme;
    const map_mirror = "https://map.ets2la.cn"
    const visualization_mirror = "https://visualization.ets2la.cn?theme=" + theme;
    const pm_link = "https://piggywu981.github.io/ets2la";

    const map = useMirror ? (usePromods ? pm_link : map_mirror) : (usePromods ? pm_link : map_link);
    const visualization = useMirror ? visualization_mirror : visualization_link;

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <motion.div className="flex w-full h-full">
                <ResizablePanelGroup direction="horizontal" className="w-full h-full">
                    <ResizablePanel className="h-full relative" defaultSize={60} onResize={(size) => {
                        if(size < 5){
                            setIsVisualizationOpen(false);
                        }
                    }}>
                        {isMapOpen && isVisualizationOpen && (
                            <div className="absolute right-0 top-0 bottom-0 w-1 z-10 bg-linear-to-r from-transparent to-[#181818]" />
                        )}
                        {isVisualizationOpen && (
                            <motion.iframe className="w-full h-full" 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                src={visualization}
                            />
                        )}
                        {!isVisualizationOpen && (
                            <div className="w-full h-full items-center flex flex-col gap-4 justify-center font-geist">
                                <div className="flex flex-col gap-0 text-center">
                                    <p className="font-semibold pb-2">Load Visualization</p>
                                    <Button variant={"outline"} onClick={() => {
                                        setIsVisualizationOpen(true)
                                    }} className="border-b-0 rounded-b-none group w-48"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Official</span></Button>
                                    <Button variant={"outline"} onClick={() => {
                                        setUseMirror(true);
                                        setIsVisualizationOpen(true)
                                    }}  className="rounded-t-none group"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Goodnightan mirror</span></Button>
                                </div>

                                <div className="flex flex-col gap-2 items-center">
                                    <p className="text-xs text-muted-foreground font-geist-mono">
                                        RAM Usage: ~400mb
                                    </p>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Please note that loading might take a minute the first time. 
                                        The visualization will update once the game is unpaused.
                                        If your screen isn't sized properly, press "F5" on your keyboard.
                                    </p>
                                </div>
                            </div>
                        )}
                    </ResizablePanel>
                    <ResizableHandle withHandle className="bg-transparent w-0 opacity-20 hover:opacity-100 z-50 transition-all" />
                    <ResizablePanel className="h-full w-0 relative" defaultSize={40} onResize={(size) => {
                        if(size < 5){
                            setIsMapOpen(false);
                        }
                    }}>
                        {isVisualizationOpen && isMapOpen && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-linear-to-l from-transparent to-[#181818]" />
                        )}
                        {isMapOpen && (
                            <motion.iframe className="w-full h-full" 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                src={map}
                            />
                        )}
                        {!isMapOpen && (
                            <div className="border-l w-full h-full items-center flex flex-col gap-4 justify-center font-geist">
                                <div className="flex flex-col gap-0 text-center">
                                <p className="font-semibold pb-2">Load Map</p>
                                    <Button variant={"outline"} onClick={() => {
                                        setIsMapOpen(true)
                                    }} className="border-b-0 rounded-b-none group w-48"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Official</span></Button>
                                    <Button variant={"outline"} onClick={() => {
                                        setUsePromods(true);
                                        setIsMapOpen(true)
                                    }} className="rounded-t-none group"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Promods Support</span></Button>
                                    <Button variant={"outline"} onClick={() => {
                                        setUseMirror(true);
                                        setIsMapOpen(true)
                                    }} className="mt-2 border-b-0 rounded-b-none group"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Goodnightan Mirror</span></Button>
                                    <Button variant={"outline"} onClick={() => {
                                        setUseMirror(true);
                                        setUsePromods(true);
                                        setIsMapOpen(true)
                                    }} className="rounded-t-none group"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Promods Support</span></Button>
                                </div>
                                <div className="flex flex-col gap-2 items-center">
                                    <p className="text-xs text-muted-foreground font-geist-mono">
                                        RAM Usage: ~200mb
                                    </p>
                                </div>
                            </div>
                        )}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </motion.div>
        
            {/* This div is required to make sure the page is always full height, presumably due to google ads... */}
            <div className="w-48 fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            </div>
        
        </>
    )
}
