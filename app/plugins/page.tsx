"use client";

import { toast } from "sonner"
import useSWR, { mutate } from "swr"
import { GetPlugins, EnablePlugin, DisablePlugin } from "@/apis/backend"
import { Button } from "@/components/ui/button"
import { Menu, Check, X } from "lucide-react"
import {
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { translate } from "@/apis/translation"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipContent } from "@radix-ui/react-tooltip"
import { ip } from "@/apis/backend"
import { AnimatePresence, motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { JoyRideNoSSR } from "@/components/joyride-no-ssr";
import { ACTIONS, EVENTS, ORIGIN, STATUS, CallBackProps } from 'react-joyride';
import { useEffect } from "react";

export default function Home() {
    const [ search, setSearch ] = useState<string>("")
    const [ searchTags, setSearchTags ] = useState<string[]>(["Base"])
    const [ searchAuthors, setSearchAuthors ] = useState<string[]>([])
    const { data, error, isLoading } = useSWR("plugins", () => GetPlugins(), { refreshInterval: 1000 }) as any
    const [hasDonePluginsOnboarding, setHasDonePluginsOnboarding] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

    const STEPS = [
        {
            target: "#search_options",
            content: translate("tutorials.plugins.options"),
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#selected_tags",
            content: translate("tutorials.plugins.tags"),
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#clear_button",
            content: translate("tutorials.plugins.clear"),
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#enable_all_checkbox",
            content: translate("tutorials.plugins.enable_all"),   
            placement: "right",
            disableBeacon: true,
            hideFooter: true,
        },
        {
            target: "#plugins_list",
            content: translate("tutorials.plugins.list"),   
            placement: "right",
            disableBeacon: true,
            hideFooter: true,
        },
    ];

    useEffect(() => {
        if (localStorage.getItem("hasDonePluginsOnboarding") === "true") {
            setHasDonePluginsOnboarding(true);
        }
    }, []);
    
    if (isLoading) return <p className="absolute left-5 top-5 font-semibold text-xs text-stone-400">{translate("loading")}</p>
    if (error){
        toast.error(translate("frontend.menubar.error_fetching_plugins", ip), {description: error.message})
        return <p className="absolute left-5 top-5 font-semibold text-xs text-stone-400">{error.message}</p>
    } 

    if (!data){
        return <p className="absolute left-5 top-5 font-semibold text-xs text-stone-400">{translate("frontend.menubar.error_fetching_plugins", ip)}</p>
    }

    console.log(data)

    const tags:string[] = [];
    for (const key in data) {
        // Check if the key is a number
        if (isNaN(parseInt(key))){
            // @ts-ignore
            for(const tag in data[key].description.tags){
                // @ts-ignore
                if(!tags.includes(data[key].description.tags[tag])){
                    // @ts-ignore
                    tags.push(data[key].description.tags[tag])
                }
            }
        }
    }

    const authors:string[] = [];
    for (const key in data) {
        // Check if the key is a number
        if (isNaN(parseInt(key))){
            // @ts-ignore
            for(const author in data[key].authors){
                // @ts-ignore
                if(!authors.includes(data[key].authors[author].name)){
                    // @ts-ignore
                    authors.push(data[key].authors[author].name)
                }
            }
        }
    }

    let hidden:number = 0;
    const enabled_plugins:string[] = [];
    const disabled_plugins:string[] = [];
    for (const key in data) {
        // Check if the key is a number
        if (isNaN(parseInt(key))){
            if(key == "Global" || key == "global_json")
                continue;

            // Search Text
            const name = translate(data[key].description.name)
            if(search != "" && !name.toLowerCase().includes(search.toLowerCase())){
                hidden++;
                continue;
            }

            // Search Tags
            if(searchTags.length > 0){
                const found = [];
                // @ts-ignore
                for(const tag in data[key].description.tags){
                    // @ts-ignore
                    if(searchTags.includes(data[key].description.tags[tag])){
                        found.push(data[key].description.tags[tag])
                    }
                }
                if(found.length != searchTags.length){
                    hidden++;
                    continue;
                }
            }

            // Search Authors
            if(searchAuthors.length > 0){
                let found = false;
                // @ts-ignore
                for(const author in data[key].authors){
                    // @ts-ignore
                    if(searchAuthors.includes(data[key].authors[author].name)){
                        found = true;
                    }
                }
                if(!found){
                    hidden++;
                    continue;
                }
            }

            if(data[key].enabled){
                enabled_plugins.push(key)
            }
            else{
                disabled_plugins.push(key)
            }
        }
    }

    const all_visible_enabled = disabled_plugins.length == 0;

    const EnablePluginLocal = async (plugin:string) => {
        await EnablePlugin(plugin)
        enabled_plugins.push(plugin)
        disabled_plugins.splice(disabled_plugins.indexOf(plugin), 1)
        // create the data again but update all plugin's enabled state based on enabled_plugins and disabled_plugins
        const new_data = {}
        for (const key in data) {
            if (isNaN(parseInt(key))){
                // @ts-ignore
                new_data[key] = { ...data[key], enabled: enabled_plugins.includes(key) }
            }
        }
        mutate("plugins", new_data, false)
    }

    const DisablePluginLocal = async (plugin:string) => {
        await DisablePlugin(plugin)
        disabled_plugins.push(plugin)
        enabled_plugins.splice(enabled_plugins.indexOf(plugin), 1)
        mutate("plugins", { ...data, [plugin]: { ...data[plugin], enabled: false } }, false)
        // create the data again but update all plugin's enabled state based on enabled_plugins and disabled_plugins
        const new_data = {}
        for (const key in data) {
            if (isNaN(parseInt(key))){
                // @ts-ignore
                new_data[key] = { ...data[key], enabled: enabled_plugins.includes(key) }
            }
        }
        mutate("plugins", new_data, false)
    }

    const EnableAllVisiblePlugins = async () => {
        while (disabled_plugins.length > 0) {
            await EnablePluginLocal(disabled_plugins[0])
        }
    }

    const DisableAllVisiblePlugins = async () => {
        while (enabled_plugins.length > 0) {
            await DisablePluginLocal(enabled_plugins[0])
        }
    }

    const handleJoyrideCallback = (data: CallBackProps) => {
        const { action, index, origin, status, type } = data;
        
        // @ts-expect-error
        if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
            setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
        } // @ts-expect-error
        else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            localStorage.setItem("hasDonePluginsOnboarding", "true");
        }
    };

    return (
        <motion.div className="h-full font-geist p-2" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <JoyRideNoSSR // @ts-expect-error no clue why it's complaining on the steps
                steps={STEPS}
                run={!hasDonePluginsOnboarding}
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
            <div className="flex flex-col gap-2 p-5 pb-0 pt-2">
                <div className="flex gap-3 items-center pr-10" id="search_options">
                    <p className="text-lg font-semibold pr-2 min-w-20">{translate("frontend.sidebar.plugins")}</p>
                    {/* Search options */}
                    <Input placeholder={translate("search")} value={search} onChange={(e) => setSearch(e.target.value)} />
                        <div className="p-0 h-3"></div> {/* Makeshift separator */}
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="outline" className="flex text-left items-center justify-start" id="selected_tags">
                                    <p className={searchTags.length > 0 ? "font-normal" : "font-normal text-muted-foreground"}>
                                        {searchTags.length > 0 ? translate("frontend.plugins.selected_tags", searchTags.length) : translate("frontend.plugins.select_tags")}
                                    </p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-background font-geist">
                                {tags.map((tag, index) => (
                                    <DropdownMenuCheckboxItem key={index} checked={searchTags.includes(tag)} onClick={() => {
                                        if(searchTags.includes(tag)){
                                            setSearchTags(searchTags.filter((t) => t != tag))
                                        }
                                        else{
                                            setSearchTags([...searchTags, tag])
                                        }
                                    }}>{tag}</DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button variant="outline" className="flex text-left items-center justify-start">
                                    <p className={searchAuthors.length > 0 ? "font-normal" : "font-normal text-muted-foreground"}>
                                        {searchAuthors.length > 0 ? translate("frontend.plugins.selected_authors", searchAuthors.length) : translate("frontend.plugins.select_authors")}
                                    </p>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-background font-geist text-xs">
                                {authors.map((author, index) => (
                                    <DropdownMenuCheckboxItem key={index} checked={searchAuthors.includes(author)} onClick={() => {
                                        if(searchAuthors.includes(author)){
                                            setSearchAuthors(searchAuthors.filter((t) => t != author))
                                        }
                                        else{
                                            setSearchAuthors([...searchAuthors, author])
                                        }
                                    }}>
                                        {author}
                                    </DropdownMenuCheckboxItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {
                            search != "" || searchTags.length > 0 || searchAuthors.length > 0 ? (
                                <Button variant="outline" onClick={() => {
                                    setSearch("")
                                    setSearchTags([])
                                    setSearchAuthors([])
                                }} className="text-muted-foreground font-normal" id="clear_button" >{translate("clear")}</Button>
                            ) : null
                        }
                </div>
            </div>
            <div className="pl-4 max-h-[calc(100vh-90px)]">
                <TooltipProvider>
                    <ResizablePanelGroup direction="horizontal" className="text-center gap-6 pr-4 h-full">
                        <AnimatePresence>
                            <ResizablePanel defaultSize={100} className="h-full w-full relative pt-5">
                                <motion.div className="h-full w-full overflow-hidden">
                                    {/* Plugin list */}

                                    <div className="w-full border rounded-t-md h-10 grid grid-cols-8 items-center text-left pl-12">
                                        <p className="text-muted-foreground text-sm col-span-2">{translate("frontend.plugins.name")}</p>
                                        <p className="text-muted-foreground text-sm col-span-2">{translate("frontend.plugins.authors")}</p>
                                        <p className="text-muted-foreground text-sm col-span-2">{translate("frontend.plugins.tags")}</p>
                                        <Checkbox checked={all_visible_enabled} onClick={() => {
                                            if(all_visible_enabled){
                                                toast.promise(
                                                    DisableAllVisiblePlugins(), 
                                                    {
                                                        loading: translate("frontend.plugins.disabling_all_plugins"),
                                                        success: translate("frontend.plugins.disabled_all_plugins"),
                                                        error: translate("frontend.plugins.error_disabling_all_plugins"),
                                                    }
                                                )
                                            }
                                            else{
                                                toast.promise(
                                                    EnableAllVisiblePlugins(), 
                                                    {
                                                        loading: translate("frontend.plugins.enabling_all_plugins"),
                                                        success: translate("frontend.plugins.enabled_all_plugins"),
                                                        error: translate("frontend.plugins.error_enabling_all_plugins"),
                                                    }
                                                )
                                            }
                                            setTimeout(() => {
                                                mutate("plugins")
                                            }, 200)
                                        }} id="enable_all_checkbox" className={all_visible_enabled ? "left-3.5 absolute opacity-100" : "left-3.5 absolute opacity-60"} />
                                    </div>

                                    <ScrollArea className="max-h-[calc(100vh-190px)] overflow-y-auto" id="plugins_list">
                                        {enabled_plugins.map((plugin:any, index) => (
                                            <motion.div key={plugin} className="w-full group relative border border-t-0 h-10 grid grid-cols-8 items-center text-left pl-12 cursor-pointer" layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                                                <Checkbox checked={data[plugin].enabled} onClick={() => {
                                                    if(data[plugin].enabled){
                                                        toast.promise(
                                                            DisablePluginLocal(plugin), 
                                                            {
                                                                loading: translate("frontend.plugins.disabling_plugin", translate(data[plugin].description.name)),
                                                                success: translate("frontend.plugins.disabled_plugin", translate(data[plugin].description.name)),
                                                                error: translate("frontend.plugins.error_disabling_plugin", translate(data[plugin].description.name)),
                                                            }
                                                        )
                                                    }
                                                    else{
                                                        toast.promise(
                                                            EnablePluginLocal(plugin), 
                                                            {
                                                                loading: translate("frontend.plugins.enabling_plugin", translate(data[plugin].description.name)),
                                                                success: translate("frontend.plugins.enabled_plugin", translate(data[plugin].description.name)),
                                                                error: translate("frontend.plugins.error_enabling_plugin", translate(data[plugin].description.name)),
                                                            }
                                                        )
                                                    }
                                                    setTimeout(() => {
                                                        mutate("plugins")
                                                    }, 200)
                                                }} className="absolute left-3.5" />
                                                <div className="flex col-span-2 gap-2 text-center items-center">
                                                    <Tooltip delayDuration={100}>
                                                        <TooltipTrigger className="col-span-2 text-start">
                                                            <p className="text-sm">{translate(data[plugin].description.name)}</p>
                                                        </TooltipTrigger>
                                                        <TooltipContent side="right" className="z-50">
                                                            <div className="rounded-md max-w-72 bg-background p-4 border text-left">
                                                                <p className="text-sm">{translate(data[plugin].description.description)}</p>
                                                            </div>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                    <p className="text-xs text-muted-foreground pt-[2.5px]">
                                                        {data[plugin].frametimes[data[plugin].frametimes.length - 1] ? 
                                                            Math.round(1/data[plugin].frametimes[1])
                                                        : "unknown"} fps
                                                    </p>
                                                </div>
                                                <div className="text-sm col-span-2 flex gap-1">{
                                                    // @ts-ignore
                                                    data[plugin].authors.map((author, index) => (
                                                        <div className="flex items-center text-left gap-1">
                                                            <p className="text-xs">{index > 0 && index < data[plugin].authors.length ? "& " : ""}{author.name}</p>
                                                        </div> 
                                                    ))
                                                }</div>
                                                <div className="text-sm col-span-4">{
                                                    // @ts-ignore
                                                    data[plugin].description.tags.map((tag, index) => (
                                                        <Badge variant={"outline"} key={index} className="mr-1 font-customSans font-normal h-7 cursor-pointer" onClick={() => {
                                                            if (!searchTags.includes(tag)) {
                                                                setSearchTags([...searchTags, tag])
                                                            }
                                                        }}>{tag}</Badge>
                                                    ))    
                                                }</div>
                                                <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>
                                                            <Menu size={18} className="opacity-50 hover:opacity-80 mx-3" />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="scale-90">
                                                            { !data[plugin].enabled ?
                                                                <DropdownMenuItem onClick={() => {
                                                                    toast.promise(
                                                                        EnablePluginLocal(plugin), 
                                                                        {
                                                                            loading: translate("frontend.plugins.enabling_plugin", translate(data[plugin].description.name)),
                                                                            success: translate("frontend.plugins.enabled_plugin", translate(data[plugin].description.name)),
                                                                            error: translate("frontend.plugins.error_enabling_plugin", translate(data[plugin].description.name)),
                                                                        }
                                                                    )
                                                                    setTimeout(() => {
                                                                        mutate("plugins")
                                                                    }, 200)
                                                                }} className="gap-2"><Check size={20} />{translate("frontend.menubar.plugins.plugin.enable")}</DropdownMenuItem>
                                                            :
                                                                <DropdownMenuItem onClick={() => {
                                                                    toast.promise(
                                                                        DisablePluginLocal(plugin), 
                                                                        {
                                                                            loading: translate("frontend.plugins.disabling_plugin", translate(data[plugin].description.name)),
                                                                            success: translate("frontend.plugins.disabled_plugin", translate(data[plugin].description.name)),
                                                                            error: translate("frontend.plugins.error_disabling_plugin", translate(data[plugin].description.name)),
                                                                        }
                                                                    )
                                                                    setTimeout(() => {
                                                                        mutate("plugins")
                                                                    }, 200)
                                                                }} className="gap-2"><X size={20} />{translate("frontend.menubar.plugins.plugin.disable")}</DropdownMenuItem>
                                                            }
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </motion.div>
                                        ))}

                                        {disabled_plugins.map((plugin:any, index) => (
                                            <motion.div key={plugin} className="w-full group relative border border-t-0 h-10 grid grid-cols-8 items-center text-left pl-12 cursor-pointer" layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>
                                                <Checkbox checked={data[plugin].enabled} onClick={() => {
                                                    if(data[plugin].enabled){
                                                        toast.promise(
                                                            DisablePluginLocal(plugin), 
                                                            {
                                                                loading: translate("frontend.plugins.disabling_plugin", translate(data[plugin].description.name)),
                                                                success: translate("frontend.plugins.disabled_plugin", translate(data[plugin].description.name)),
                                                                error: translate("frontend.plugins.error_disabling_plugin", translate(data[plugin].description.name)),
                                                            }
                                                        )
                                                    }
                                                    else{
                                                        toast.promise(
                                                            EnablePluginLocal(plugin), 
                                                            {
                                                                loading: translate("frontend.plugins.enabling_plugin", translate(data[plugin].description.name)),
                                                                success: translate("frontend.plugins.enabled_plugin", translate(data[plugin].description.name)),
                                                                error: translate("frontend.plugins.error_enabling_plugin", translate(data[plugin].description.name)),
                                                            }
                                                        )
                                                    }
                                                    setTimeout(() => {
                                                        mutate("plugins")
                                                    }, 200)
                                                }} className="absolute left-3.5 opacity-60 group-hover:opacity-100" />
                                                <Tooltip delayDuration={100}>
                                                    <TooltipTrigger className="col-span-2 text-start">
                                                        <p className="text-sm text-muted-foreground group-hover:text-foreground">{translate(data[plugin].description.name)}</p>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="right" className="z-50">
                                                        <div className="rounded-md max-w-72 bg-background p-4 border">
                                                            <p className="text-sm">{translate(data[plugin].description.description)}</p>
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                                <div className="text-sm col-span-2 flex gap-1">{
                                                    // @ts-ignore
                                                    data[plugin].authors.map((author, index) => (
                                                        <div className="flex items-center text-left gap-1">
                                                            <p className="text-xs text-muted-foreground group-hover:text-foreground">{index > 0 && index < data[plugin].authors.length ? "& " : ""}{author.name}</p>
                                                        </div> 
                                                    ))
                                                }</div>
                                                <div className="text-sm col-span-4">{
                                                    // @ts-ignore
                                                    data[plugin].description.tags.map((tag, index) => (
                                                        <Badge variant={"outline"} key={index} className="mr-1 font-customSans font-normal h-7 cursor-pointer opacity-60 group-hover:opacity-100" onClick={() => {
                                                            if (!searchTags.includes(tag)) {
                                                                setSearchTags([...searchTags, tag])
                                                            }
                                                        }}>{tag}</Badge>
                                                    ))    
                                                }</div>
                                                <div className="absolute right-0 opacity-0 group-hover:opacity-100 transition-all">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger>
                                                            <Menu size={18} className="opacity-50 hover:opacity-80 mx-3" />
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="scale-90">
                                                            { !data[plugin].enabled ?
                                                                <DropdownMenuItem onClick={() => {
                                                                    toast.promise(
                                                                        EnablePluginLocal(plugin), 
                                                                        {
                                                                            loading: translate("frontend.plugins.enabling_plugin", translate(data[plugin].description.name)),
                                                                            success: translate("frontend.plugins.enabled_plugin", translate(data[plugin].description.name)),
                                                                            error: translate("frontend.plugins.error_enabling_plugin", translate(data[plugin].description.name)),
                                                                        }
                                                                    )
                                                                    setTimeout(() => {
                                                                        mutate("plugins")
                                                                    }, 200)
                                                                }} className="gap-2"><Check size={20} />{translate("frontend.menubar.plugins.plugin.enable")}</DropdownMenuItem>
                                                            :
                                                                <DropdownMenuItem onClick={() => {
                                                                    toast.promise(
                                                                        DisablePluginLocal(plugin), 
                                                                        {
                                                                            loading: translate("frontend.plugins.disabling_plugin", translate(data[plugin].description.name)),
                                                                            success: translate("frontend.plugins.disabled_plugin", translate(data[plugin].description.name)),
                                                                            error: translate("frontend.plugins.error_disabling_plugin", translate(data[plugin].description.name)),
                                                                        }
                                                                    )
                                                                    setTimeout(() => {
                                                                        mutate("plugins")
                                                                    }, 200)
                                                                }} className="gap-2"><X size={20} />{translate("frontend.menubar.plugins.plugin.disable")}</DropdownMenuItem>
                                                            }
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </ScrollArea>
                                    <motion.div className="w-full border border-t-0 rounded-b-md h-10 items-center flex pl-4" layout>
                                        {hidden > 0 ? <p className="text-muted-foreground text-xs">{translate("frontend.plugins.hidden", hidden)}</p> : <p className="text-muted-foreground text-xs">{translate("frontend.plugins.end_list")}</p>}
                                    </motion.div>
                                </motion.div>
                            </ResizablePanel>
                        </AnimatePresence>
                    </ResizablePanelGroup>
                </TooltipProvider>
            </div>
        </motion.div>
    )
}