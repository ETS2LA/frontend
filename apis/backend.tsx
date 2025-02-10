"use client"

import { time } from "console"
import { randomInt } from "crypto"
import { toast } from "sonner"

const sleep = (delay:number) => new Promise((resolve) => setTimeout(resolve, delay))

export let token = '';
export let ip = 'localhost';

export async function setToken(newToken: string){
    token = newToken;
}

export async function setIP(newIP: string){
    ip = newIP;
}

// Communicate with the ETS2LA backend web server on 37520
export async function GetVersion() {
    console.log("Getting version")
    const response = await fetch("http://" + ip + ":37520/")
    const data = await response.json()
}

export async function CheckWindow(window:string) {
    console.log("Checking window")
    const response = await fetch("http://" + ip + ":37520/window/exists/" + window)
    const data = await response.json()
    return data
}

export async function CheckForUpdate() {
    console.log("Checking for update")
    const response = await fetch("http://" + ip + ":37520/backend/updates")
    const data = await response.json()
    return data
}

export async function Update() {
    console.log("Updating")
    const response = await fetch("http://" + ip + ":37520/backend/update")
    const data = await response.json()
}

export async function CloseBackend() {
    console.log("Closing backend")
    const response = await fetch("http://" + ip + ":37520/backend/quit")
    const data = await response.json()
}

export async function RestartBackend() {
    console.log("Restarting backend")
    const response = await fetch("http://" + ip + ":37520/backend/restart")
    const data = await response.json()
}

export async function MinimizeBackend() {
    console.log("Minimizing backend")
    const response = await fetch("http://" + ip + ":37520/window/minimize")
    const data = await response.json()
}


export async function GetPlugins(): Promise<string[]> {
    const response = await fetch("http://" + ip + ":37520/backend/plugins")
    const data = await response.json()
    return data
}

export async function GetStatistics() {
    const response = await fetch("http://" + ip + ":37520/backend/statistics")
    const data = await response.json()
    return data
}

export async function GetStates() {
    const response = await fetch("http://" + ip + ":37520/backend/plugins/states")
    const data = await response.json()
    return data
}

export async function DisablePlugin(plugin: string) {
    console.log("Disabling plugin")
    const response = await fetch("http://" + ip + `:37520/backend/plugins/${plugin}/disable`)
    const data = await response.json()
}

export async function EnablePlugin(plugin: string) {
    console.log("Enabling plugin")
    const response = await fetch("http://" + ip + `:37520/backend/plugins/${plugin}/enable`)
    const data = await response.json()
}

export async function GetIP(): Promise<string> {
    const response = await fetch(`http://${ip}:37520/backend/ip`)
    const data = await response.json()
    await sleep(Math.floor(Math.random() * 1000) + 1000)
    return data
}

export async function GetMetadata(): Promise<any> {
    const response = await fetch(`http://${ip}:37520/api/metadata`)
    const data = await response.json()
    return data
}

export async function PluginFunctionCall(plugin:string, method:string, args:any, kwargs:any) {
    console.log(method)
    const response = await fetch(`http://${ip}:37520/backend/plugins/${plugin}/function/call`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            target: method,
            args: args, 
            kwargs: kwargs
        })
    })
    const data = await response.json()
    return data
}

export async function RelievePlugin(plugin:string, relieveData:any) {
    const response = await fetch(`http://${ip}:37520/backend/plugins/${plugin}/relieve`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({data: relieveData})
    })
    const result = await response.json()
    return result
}

export async function GetGitHistory() {
    const response = await fetch(`http://${ip}:37520/api/git/history`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function GetPerformance() {
    const response = await fetch(`http://${ip}:37520/backend/plugins/performance`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function ColorTitleBar(theme="dark") {
    const response = await fetch(`http://${ip}:37520/api/ui/theme/${theme}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function PlaySound(sound="boot") {
    try {
        const response = await fetch(`http://${ip}:37520/api/sounds/play/${sound}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data
    } catch {
        return null
    }
}

export async function GetStayOnTop() {
    const response = await fetch(`http://${ip}:37520/window/stay_on_top`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function SetStayOnTop(top=true) {
    const response = await fetch(`http://${ip}:37520/window/stay_on_top/${top}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function SetTransparent(transparent=true) {
    const response = await fetch(`http://${ip}:37520/window/transparency/${transparent}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function GetTransparent() {
    const response = await fetch(`http://${ip}:37520/window/transparency`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function GetCurrentLanguage() {
    const response = await fetch(`http://${ip}:37520/api/language`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function GetPages() {
    const response = await fetch(`http://${ip}:37520/api/pages`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

export async function GetPage(target_page:string) {
    const response = await fetch(`http://${ip}:37520/api/page`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            page: target_page
        })
    })
    const data = await response.json()
    return data
}

export async function GetDevmode() {
    const response = await fetch(`http://${ip}:37520/backend/devmode`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}