import { Progress } from "@/components/ui/progress";
import Loader from "../loader";

export function ProgressState({ state, plugin_name, state_progress_percent }: { state: string, plugin_name: string, state_progress_percent: number })
{
    return (
        <div className="h-min w-[354px] rounded-lg text-sm flex flex-col gap-2 font-semibold">
            <div className="flex justify-between text-start items-center">
                <p style={{whiteSpace: "pre-wrap"}}>{state}</p>
                <p className="text-muted-foreground p-0 text-xs pl-2">{plugin_name}</p>
            </div>
            <Progress value={state_progress_percent} className="pb-0" />
        </div>
    )
}

export function IndeterminateState({ state, plugin_name }: { state: string, plugin_name: string })
{
    return (
        <div className="flex justify-between text-start items-center h-min font-semibold">
            <div className="flex text-left content-center items-center gap-2">
                <Loader className={""} /> 
                <p style={{whiteSpace: "pre-wrap"}} className="pl-1">{state}</p>
            </div>
            <p className="text-muted-foreground p-0 min-w-max text-xs pl-2">{plugin_name}</p>
        </div>
    )
}