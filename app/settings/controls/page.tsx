"use client"

import {
    Card
} from "@/components/ui/card"  

import { toast } from "sonner"
import useSWR from "swr"
import { mutate } from "swr"
import { GetSettingsJSON, TriggerControlChange, UnbindControl } from "@/apis/settings"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { ip } from "@/apis/backend"

export default function ControlsPage() {
    const { push } = useRouter() //                                            ETS2LA / controls.json
    const {data, error, isLoading} = useSWR("controls", () => GetSettingsJSON("ETS2LA%5Ccontrols.json"));
    if (isLoading) return <Card className="flex flex-col content-center text-center pt-10 space-y-5 pb-0 h-[calc(100vh-72px)] overflow-auto"><p className="font-semibold text-xs text-stone-400">Loading...</p></Card>
    if (error){
        toast.error("Error fetching settings from " + ip, {description: error.message})
        return <Card className="flex flex-col content-center text-center pt-10 space-y-5 pb-0 h-[calc(100vh-72px)] overflow-auto"><p className="absolute left-5 font-semibold text-xs text-stone-400">{error.message}</p></Card>
    } 

    console.log(data)
    const controls:string[] = [];
    for (const key in data) {
        controls.push(key)
    }

    const format_name = (name:string) => {
        if(name == undefined) { return "Unbound" }

        const length = name.length;
        if (length > 16) {
            return name.slice(0, 16) + "..."
        }
        return name
    }

    const format_key = (key:string) => {
        if(key == undefined) { return "Unbound" }
        if(key.length <= 2) { return key }

        key = key.replace("_", " ")
        return key.charAt(0).toUpperCase() + key.slice(1)
    }

    return (
        <div className="flex space-x-3 max-w-[calc(60vw-64px)] font-geist">
            <div className="flex flex-col gap-4 h-full overflow-auto auto-rows-min w-full text-left">
                {controls.map((control:any) => (
                    <div key={control} id={control} className="flex w-full h-full justify-between border rounded-md p-4 text-left items-start">
                        
                        <div className="flex flex-col gap-2 w-full self-center">
                            <p className="font-semibold text-sm">{data[control]["name"]}</p>
                            <p className="text-sm text-muted-foreground">{data[control]["description"] == "" && "No description provided" || data[control].description}</p>
                        </div>

                        <div className="self-start items-end w-96 pl-4 pr-2">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Badge className="rounded w-16">Device</Badge>
                                    <Badge className="rounded" variant={"secondary"}>{data[control]["device"] == "" && "Unbound" || format_name(data[control]["device"])}</Badge>
                                </div>
                                <div className="flex gap-2">
                                    <Badge className="rounded w-16">{data[control]["device"] == "Keyboard" && "Key" || data[control]["type"] == "button" && "Button" || "Axis"}</Badge>
                                    <Badge className="rounded" variant={"secondary"}>{data[control]["key"] == "" && "Unbound" || format_key(data[control]["key"])}</Badge>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Button className="text-xs font-semibold h-[22px] rounded-sm" onClick={() => {
                                toast.promise(TriggerControlChange(control), {
                                    loading: "Changing keybind...",
                                    success: "Keybind changed successfully!",
                                    error: "Failed to change keybind.",
                                    description: data[control]["type"] == "button" && "Please press the key you want to bind this event to." 
                                                 || "Please move the axis you want to bind this event to.",
                                    duration: 1000,
                                    onAutoClose: () => mutate("controls"),
                                    onDismiss: () => mutate("controls")
                                })
                            }}>Change</Button>
                            <Button className="text-xs font-semibold h-[22px] rounded-sm" variant={"secondary"} onClick={() => {
                                toast.promise(UnbindControl(control), {
                                    loading: "Unbinding keybind...",
                                    success: "Keybind unbound successfully!",
                                    error: "Failed to unbind keybind.",
                                    duration: 1000,
                                    onAutoClose: () => mutate("controls"),
                                    onDismiss: () => mutate("controls")
                                })
                            }}>Unbind</Button>
                        </div>
                    </div>
                ))}
                <div className="h-20" />
            </div>
        </div>
    )
}
