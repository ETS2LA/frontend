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

export default function Visualization() {
    const [ useMirror, setUseMirror ] = useState(false);
    const [ isVisualizationOpen, setIsVisualizationOpen ] = useState(false);
    const [ isMapOpen, setIsMapOpen ] = useState(false);

    const map_link = "https://truckermudgeon.github.io/ets2la";
    const visualization_link = "https://visualization.ets2la.com/";
    const map_mirror = "https://ets2lamap.goodnightan.com/ets2la/index.html"
    const visualization_mirror = "https://ets2lavisualization.goodnightan.com/"

    const map = useMirror ? map_mirror : map_link;
    const visualization = useMirror ? visualization_mirror : visualization_link;

    return (
        <motion.div className="flex w-full h-full">
            <ResizablePanelGroup direction="horizontal" className="w-full h-full">
                <ResizablePanel className="h-full relative" defaultSize={60} onResize={(size) => {
                    if(size < 5){
                        setIsVisualizationOpen(false);
                    }
                }}>
                    {isMapOpen && isVisualizationOpen && (
                        <div className="absolute right-0 top-0 bottom-0 w-1 z-10 bg-gradient-to-r from-transparent to-[#181818]" />
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
                        <div className="border w-full h-full rounded-l-xl items-center flex flex-col gap-4 justify-center border-r-0 font-geist">
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
                                    Please note that loading might take a minute the first time. <br />
                                    The visualization will update once the game is unpaused.
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
                        <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-gradient-to-l from-transparent to-[#181818]" />
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
                        <div className="border w-full h-full rounded-r-xl items-center flex flex-col gap-4 justify-center font-geist">
                            <div className="flex flex-col gap-0 text-center">
                            <p className="font-semibold pb-2">Load Map</p>
                                <Button variant={"outline"} onClick={() => {
                                    setIsMapOpen(true)
                                }} className="border-b-0 rounded-b-none group w-48"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Official</span></Button>
                                <Button variant={"outline"} onClick={() => {
                                    setUseMirror(true);
                                    setIsMapOpen(true)
                                }} className="rounded-t-none group"><span className="text-muted-foreground text-xs group-hover:text-foreground transition-all">Goodnightan Mirror</span></Button>
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
    )
}