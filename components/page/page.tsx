import { Skeleton } from "@/components/ui/skeleton"
import useSWR, { mutate } from "swr"
import { PluginFunctionCall, EnablePlugin } from "@/apis/backend"
import { Separator } from "../ui/separator"
import { Input } from "../ui/input"
import { GetSettingsJSON, SetSettingByKey, SetSettingByKeys } from "@/apis/settings"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	TooltipProvider,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { Toggle } from "@/components/ui/toggle"
import { Switch } from "../ui/switch"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { useEffect } from "react"
import { Slider } from "../ui/slider"
import { useState } from "react"
import { translate } from "@/apis/translation"
import React, { Component } from 'react';
import { SkeletonItem } from "@/components/page/skeleton_item"
import {
	Check,
	X
} from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "../ui/progress"
import Markdown from "react-markdown"
import { AnimatePresence, motion } from "framer-motion"
// @ts-expect-error
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-expect-error
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface SliderComponentProps {
    pluginSettings: Record<string, any>;
    data: {
        key: string;
        name: string;
        description: string;
		requires_restart?: boolean;
		type: string;
        options: {
            min: number;
            max: number;
            step?: number;
            suffix?: string;
        };
    };
	default: number;
	toast: any;
    plugin: string;
    setNeedsRestart: (needsRestart: boolean) => void;
    mutate: (key: string) => void;
    translate: (key: string) => string;
}

interface SliderComponentState {
    curSliderValue: number;
    tempSliderValue: number | null;
}

class SliderComponent extends Component<SliderComponentProps, SliderComponentState> {
    constructor(props: SliderComponentProps) {
        super(props);
        const value = props.pluginSettings[props.data.key] ? parseFloat(props.pluginSettings[props.data.key]) : props.default;
        this.state = {
            curSliderValue: value,
            tempSliderValue: null
        };
    }

    handleValueChange = (value: number[]) => {
        this.setState({ tempSliderValue: value[0] });
    }

    handleValueCommit = (value: number[]) => {
        const { plugin, data, setNeedsRestart, mutate, translate } = this.props;
        SetSettingByKey(plugin, data.key, value[0]).then(() => {
            if (data.requires_restart)
                setNeedsRestart(true);
            mutate(plugin + "settings");
            toast.success(translate("frontend.settings.number.updated"), {
                duration: 500
            });
            this.setState({ curSliderValue: value[0], tempSliderValue: null });
        });
    }

    render() {
        const { data, translate, pluginSettings } = this.props;
        const { curSliderValue, tempSliderValue } = this.state;
        const value = pluginSettings[data.key] ? parseFloat(pluginSettings[data.key]) : curSliderValue;
        const step = data.options.step || 1;
        const suffix = data.options.suffix || "";

        return (
            <div className="flex flex-col gap-3 w-full rounded-md border p-4 bg-input/10 transition-all">
				<div className="flex justify-between items-center">
                	<p className="font-semibold">{translate(data.name)}</p>
					<p className="text-muted-foreground">{value}{suffix}{tempSliderValue !== null ? tempSliderValue != value ? ` → ${tempSliderValue}${suffix}` : `` : ``}</p>
				</div>
                <Slider min={data.options.min} max={data.options.max} defaultValue={[value]} step={step} onValueChange={this.handleValueChange} onValueCommit={this.handleValueCommit} />
                <p className="text-xs text-muted-foreground">{translate(data.description)}</p>
            </div>
        );
    }
}

export function ETS2LAPage({ data, plugin, enabled, className }: { data: any, plugin: string, enabled?: boolean, className?: string }) {
	const { data: pluginSettings, error: pluginSettingsError, isLoading: pluginSettingsLoading } = useSWR(plugin + "settings", () => GetSettingsJSON(plugin))
	const [needsRestart, setNeedsRestart] = useState(false)

	// Update the settings when the plugin changes
	useEffect(() => {
		setNeedsRestart(false)
		mutate(plugin + "settings")
	}, [plugin])

	useEffect(() => {
		try{
			let interval = null;
			if(enabled){
				const item = data[0]
				if(item["refresh_rate"] == undefined){
					item["refresh_rate"] = 2
				}
				interval = setInterval(() => {
					mutate("plugin_ui_plugins")
				}, item["refresh_rate"] * 1000)
			}
			else{
				interval = setInterval(() => {
					mutate("plugin_ui_plugins")
				}, 2000)
			}
			return () => clearInterval(interval)
		}
		catch{}
    }, [data, plugin, enabled]);

	if(enabled == undefined){
		enabled = true
	}

	if (pluginSettingsLoading) {
		return <Skeleton />
	}

	if (pluginSettingsError) {
		return <p className="text-xs text-muted-foreground">{translate("frontend.settings.error", pluginSettingsError)}</p>
	}

	if (!data || !pluginSettings) {
		return <p className="text-xs text-muted-foreground">{translate("frontend.settings.backend_no_data")}</p>
	}

	const settings = data

	const text_sizes = {
		"xs": "text-xs",
		"sm": "text-sm",
		"md": "text-base",
		"lg": "text-lg",
		"xl": "text-xl",
		"2xl": "text-2xl",
	}

	// Literal["thin", "light", "normal", "medium", "semibold", "bold"]
	const weights = {
		"thin": "font-thin",
		"light": "font-light",
		"normal": "font-normal",
		"medium": "font-medium",
		"semibold": "font-semibold",
		"bold": "font-bold"
	}

	const TitleRenderer = (data: any) => {
		// @ts-ignore
		return <p className={weights[data.options.weight] + " " + text_sizes[data.options.size] + "! " + data.classname} style={{whiteSpace: "pre-wrap"}}>{translate(data.text)}</p>
	}

	const DescriptionRenderer = (data: any) => {
		// @ts-ignore
		return <p className={weights[data.options.weight] + " text-muted-foreground " + text_sizes[data.options.size] + " " + data.classname} style={{whiteSpace: "pre-wrap"}}>{translate(data.text)}</p>
	}

	const LabelRenderer = (data: any) => {
		// @ts-ignore
		return <p className={weights[data.options.weight] + " " + text_sizes[data.options.size] + " " + data.classname} style={{whiteSpace: "pre-wrap"}}>{translate(data.text)}</p>
	}

	const LinkRenderer = (data: any) => {
		// @ts-ignore
		return <a href={data.url} className={weights[data.options.weight] + " text-accent-foreground " + text_sizes[data.options.size] + " " + data.classname} style={{whiteSpace: "pre-wrap"}} target="_blank">{translate(data.text)}</a>
	}

	function MarkdownRenderer(data: any, no_padding?: boolean) {
	  return (
		<Markdown
		  components={{
			// @ts-expect-error
			code({node, inline, className, children, ...props}) {
				const hasLineBreaks = String(children).includes('\n');
				const match = /language-(\w+)/.exec(className || '');
				const lang = match ? match[1] : 'json';
			  
				// For inline code (no line breaks)
				if (!hasLineBreaks) {
					return (
					<code
						className="rounded-md bg-accent p-1 font-geist-mono text-xs"
						{...props}
					>
						{children}
					</code>
					);
				}
			
				// For code blocks (has line breaks)
				return (
				  <SyntaxHighlighter
					language={lang}
					style={vscDarkPlus}
					customStyle={{
					  margin: (no_padding ? '0 0' : '1rem 0'),
					  padding: '1rem',
					  borderRadius: '0.5rem',
					  fontSize: '0.75rem',
					  fontFamily: 'var(--font-geist-mono)'
					}}
				  >
					{String(children).replace(/\n$/, '')}
				  </SyntaxHighlighter>
				);
			},
			// Custom renderer for images
		    img({node, ...props}) {
				return (
					<img
					{...props}
					className="rounded-md"
					/>
				);
			},
		}} className={data.classname}>
		  {data}
		</Markdown>
	  );
	}

	const SeparatorRenderer = () => {
		return <>
			<Separator />
		</>
	}

	const SpaceRenderer = (data:number) => {
		// data = height in px
		if (data) {
			return <div style={{
				height: data + "px"
			}}>
			</div>
		}
		return <div className="h-4"></div>
	}

	const InputRenderer = (data:any) => {
		if(pluginSettings[data.key] == undefined){
			if(data.options.default != undefined){
				console.log("Setting default value for", data.key)
				pluginSettings[data.key] = data.options.default
			}
			else{
				pluginSettings[data.key] = data.options.type
			}
		}

		if (data.options.type == "string" || data.options.type == "password") {
			const type = data.options.type == "password" ? "password" : "text"
			let placeholder = ""
			if (type == "password") {
				placeholder = "•".repeat(pluginSettings[data.key].length)
			}
			else {
				placeholder = pluginSettings[data.key]
			}
			return <div className="flex gap-4 w-full rounded-md p-4 border justify-between bg-input/10 transition-all">
				<div className="flex flex-col">
						<p className="font-semibold">{translate(data.name)}</p>	
						<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
				</div>
				<Input type={type} placeholder={placeholder} onChange={(e) => {
					SetSettingByKey(plugin, data.key, e.target.value).then(() => {
						if (data.requires_restart)
							setNeedsRestart(true)
						mutate(plugin + "settings")
						toast.success(translate("frontend.settings.string.updated"), {
							duration: 500
						})
					})
				}} className="max-w-xs" />
			</div>
		}

		if (data.options.type == "number") {
			return (
				<div className="flex gap-4 w-full rounded-md p-4 border justify-between bg-input/10 transition-all">
					<div className="flex flex-col">
						<p className="font-semibold">{translate(data.name)}</p>	
						<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
					</div>
					<Input type="number" placeholder={pluginSettings[data.key]} className="font-geist-mono max-w-xs" onChange={(e) => {
						SetSettingByKey(plugin, data.key, parseFloat(e.target.value)).then(() => {
							if (data.requires_restart)
								setNeedsRestart(true)
							mutate(plugin + "settings");
							toast.success(translate("frontend.settings.number.updated"), {
								duration: 500
							});
						});
					}} />
				</div>
			)
		}
	}

	const SliderRenderer = (data:any) => {
		return ( // Add return statement here
			<SliderComponent
				pluginSettings={pluginSettings}
				data={data}
				plugin={plugin}
				setNeedsRestart={setNeedsRestart}
				mutate={mutate}
				toast={toast}
				translate={translate}
				default={data.options.default}
			/>
		);
	}

	const SwitchRenderer = (data:any) => {
		const checked = pluginSettings[data.key]
		if (checked == null || typeof checked != "boolean") {
			if (data.options.default != undefined) {
				console.log("Setting default value for", data.key)
				pluginSettings[data.key] = data.options.default
			}
			else {
				pluginSettings[data.key] = false
			}
		}
		let classname = "items-center justify-between flex space-x-4 " + GetBorderClassname(data.options.border);
		if (data.options.border && checked) {
			classname += " bg-input/30";
		}
		return <div className={classname} onClick={() => {
			SetSettingByKey(plugin, data.key, !checked).then(() => {
				if (data.requires_restart)
					setNeedsRestart(true)
				mutate(plugin + "settings")
				toast.success(translate("frontend.settings.boolean.updated"), {
					duration: 500
				})
			}
		)}}>
				<div className="flex flex-col gap-1 pr-12">
					<p className="font-semibold">{translate(data.name)}</p>
					<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
				</div>
				<Switch checked={checked} onCheckedChange={(bool) => {
					SetSettingByKey(plugin, data.key, bool).then(() => {
						if (data.requires_restart)
							setNeedsRestart(true)
						mutate(plugin + "settings")
						toast.success(translate("frontend.settings.boolean.updated"), {
							duration: 500
						})
					})
				}} />
			</div>
	}

	const SelectorRenderer = (data:any) => {
		if (pluginSettings[data.key] == undefined) {
			if (data.options.default != undefined) {
				console.log("Setting default value for", data.key)
				pluginSettings[data.key] = data.options.default
			}
			else {
				pluginSettings[data.key] = data.options.options[0]
			}
		}
		return <div className="flex gap-6 items-center rounded-md border p-4 bg-input/10 transition-all">
					<div className="flex flex-col">
						<p className="font-semibold">{translate(data.name)}</p>
						<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
					</div>
					<Select defaultValue={pluginSettings[data.key]} onValueChange={(value) => {
						SetSettingByKey(plugin, data.key, value).then(() => {
							if (data.requires_restart)
								setNeedsRestart(true)
							mutate(plugin + "settings")
							toast.success(translate("frontend.settings.enum.updated"), {
								duration: 500
							})
						})
					}} >
						<SelectTrigger className="grow">
							<SelectValue placeholder={pluginSettings[data.key]}>{pluginSettings[data.key]}</SelectValue>
						</SelectTrigger>
						<SelectContent className="bg-input/30 backdrop-blur-md font-geist">
							{data.options.options.map((value:any) => (
								<SelectItem key={value} value={value}>{value}</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
	}

	const ToggleRenderer = (data:any) => {
		const checked = pluginSettings[data.key] && pluginSettings[data.key] || false;
		let classname = "items-top flex space-x-4 " + GetBorderClassname(data.options.border);
		if (data.options.border && checked) {
			classname += " bg-input/30";
		}
		return <div className={classname} onClick={() => {
			SetSettingByKey(plugin, data.key, !checked).then(() => {
				if (data.requires_restart)
					setNeedsRestart(true)
				mutate(plugin + "settings")
				toast.success(translate("frontend.settings.boolean.updated"), {
					duration: 500
				})
			})
		}}>
			<Checkbox 
				checked={checked}
				onCheckedChange={(bool) => {
					SetSettingByKey(plugin, data.key, bool).then(() => {
						if (data.requires_restart)
							setNeedsRestart(true)
						mutate(plugin + "settings")
						toast.success(translate("frontend.settings.boolean.updated"), {
							duration: 500
						})
					})
				}}
			/>
			<div className="grid gap-1.5 leading-none">
				<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					{translate(data.name)}
				</label>
				<p className="text-muted-foreground text-xs">
					{translate(data.description)}
				</p>
			</div>
	  </div>
	}

	const ButtonRenderer = (data:any) => {
		if (data.title == ""){
			return <Button variant={"outline"} onClick={() => {
					PluginFunctionCall(plugin, data.options.target, [], {}).then(() => {
						toast.success(translate("Success"), {
							duration: 500
						})
					})
			}} className={"min-w-32 w-full " + data.classname}>{translate(data.text)}</Button>
		}
		return <div className={"flex justify-between p-4 items-center" + GetBorderClassname(data.options.border) + " " + data.classname}>
				<div className="flex flex-col gap-1 pr-12">
					<p className="font-semibold">{translate(data.title)}</p>
					<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
				</div>
				<Button variant={"outline"} onClick={() => {
					PluginFunctionCall(plugin, data.options.target, [], {}).then(() => {
						toast.success(translate("Success"), {
							duration: 500
						})
					})
				}} className="min-w-32">{translate(data.text)}</Button>
			</div>
	}

	const ProgressBarRenderer = (data:any) => {
		const value = data.value;
		const min = data.min;
		const max = data.max;
		const progress = (value - min) / (max - min) * 100;
		return <div className="flex flex-col gap-2 w-full">
			<Progress value={progress} />
			<p className="text-xs text-muted-foreground">{translate(data.description)}</p>
		</div>
	}

	const EnabledLock = () => {
		return <div className="flex justify-between p-4 items-center border rounded-md backdrop-blur-md gap-10">
			<div>
				<h4>{translate("please_enable_the_plugin.title")}</h4>
				<p className="text-xs text-muted-foreground">{translate("please_enable_the_plugin.description")}</p>
			</div>
			<Button variant={"outline"} onClick={() => {
				EnablePlugin(plugin).then(() => {
					toast.success(translate("plugin_enabled"), {
						duration: 500
					})
				})
			}} className="min-w-32">{translate("enable_plugin")} {plugin}</Button>
		</div>
	}

	const GetBorderClassname = (border:boolean) => {
		if(border){
			return " p-4 border rounded-md"
		}
		return ""
	}

    // @ts-ignore
	const PageRenderer = (data: any) => {
		if (!Array.isArray(data)) {
			data = [data]
		}
		const result = [];
		for (const item of data) {
			const key = Object.keys(item)[0];
			const key_data = item[key];

			if (key == "enabled_lock") {
				if(!enabled){
					result.push(
						<div className="w-full relative">
							<div className="absolute inset-0 flex items-center justify-center z-10 w-full">
								<EnabledLock />
							</div>
							<div className="p-3 opacity-50 blur-xs">
								{PageRenderer(key_data.components)}
							</div>
						</div>
					);
				}
				else{
					result.push(PageRenderer(key_data.components))
				}
			}

			// Page looks
			if(key == "title"){
				result.push(TitleRenderer(key_data))
			}
			if(key == "description"){
				result.push(DescriptionRenderer(key_data))
			}
			if (key == "label") {
				result.push(LabelRenderer(key_data))
			}
			if (key == "link") {
				result.push(LinkRenderer(key_data))
			}
			if (key == "markdown") {
				result.push(MarkdownRenderer(key_data.text))
				// Print the innerhtml of the markdown
				//console.log(MarkdownRenderer(key_data.text))
			}
			if (key == "separator") {
				result.push(SeparatorRenderer())
			}
			if (key == "space") {
				result.push(SpaceRenderer(key_data.height))
			}
			if (key == "group") {
				const direction = key_data.direction
				if(direction == "horizontal"){
					result.push(<div className={"flex w-full overflow-x-auto rounded-md" + GetBorderClassname(key_data.border) + " " + key_data.classname} style={{
						gap: key_data.gap + "px",
						padding: key_data.padding + "px"
					}}>
						{PageRenderer(key_data.components)}
					</div>)
				}
				else{
					result.push(<div className={"flex flex-col overflow-x-auto w-full rounded-md" + GetBorderClassname(key_data.border) + " " + key_data.classname} style={{
						gap: key_data.gap + "px",
						padding: key_data.padding + "px"
					}}>
						{PageRenderer(key_data.components)}
					</div>)
				}
			}
			if (key == "tabview") {
				result.push(
					<Tabs className="w-full" defaultValue={key_data.components[0].tab.name}>
						<TabsList className="w-full bg-transparent p-0">
							{key_data.components.map((tab:any, index:number) => (
								<TabsTrigger key={index} value={tab.tab.name}>{translate(tab.tab.name)}</TabsTrigger>
							))}
						</TabsList>
						<AnimatePresence>
							{key_data.components.map((tab:any, index:number) => (
								<TabsContent key={index} value={tab.tab.name} className="w-full rounded-md p-0 pt-4 flex gap-6 flex-col data-[state=inactive]:hidden">
									{PageRenderer(tab)}
								</TabsContent>
							))}
						</AnimatePresence>
					</Tabs>
				)
			}
			if (key == "tab"){
				result.push(PageRenderer(key_data.components))
			}
			if (key == "padding"){
				result.push(<div style={{padding: key_data.padding}}>
					{PageRenderer(key_data.components)}
				</div>
				)
			}
			if (key == "tooltip"){
				result.push(
					<Tooltip>
						<TooltipTrigger>
							{PageRenderer(key_data.components)}
						</TooltipTrigger>
						<TooltipContent className={key_data.classname} style={{whiteSpace: "pre-wrap"}}>
							{MarkdownRenderer(key_data.text, true)}
						</TooltipContent>
					</Tooltip>
				)
			}
			if (key == "geist"){
				result.push(<div className="flex flex-col gap-4 font-geist">
					{PageRenderer(key_data.components)}
				</div>)
			}

			// Live Data
			if (key == "progress_bar") {
				result.push(ProgressBarRenderer(key_data))
			}

			// Functions
			if (key == "button") {
				result.push(ButtonRenderer(key_data))
			}

			// Options
			if (key == "input") {
				result.push(InputRenderer(key_data))
			}
			if (key == "slider") {
				result.push(SliderRenderer(key_data))
			}
			if (key == "switch") {
				result.push(SwitchRenderer(key_data))
			}
			if (key == "toggle") {
				result.push(ToggleRenderer(key_data))
			}
			if (key == "selector") {
				result.push(SelectorRenderer(key_data))
			}
		};

		return result;
	};

	return (
		<TooltipProvider delayDuration={0}>
			<div className={"text-left flex flex-col w-full max-w-[calc(60vw-64px)] gap-6 relative " + className}>
				{PageRenderer(settings)}
				<div className="h-12"></div>
			</div>
		</TooltipProvider>
	)
}
