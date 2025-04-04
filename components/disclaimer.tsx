"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useEffect } from "react";
import { translate, currentLanguage } from "@/apis/translation";
import { Button } from "./ui/button";
import Image from 'next/image';
import kofi_logo from '@/assets/kofi.svg';

export function Disclaimer({ closed_callback }: { closed_callback: () => void }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>

            </DialogTrigger>
            <DialogContent className="font-geist">
                <DialogHeader>
                    <DialogTitle className="text-lg!">{translate("frontend.disclaimer.title")}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">{translate("frontend.disclaimer.description.line1")}</p>
                <p className="text-muted-foreground">{translate("frontend.disclaimer.description.line2")}</p>
                <div className="flex gap-2">
                    <Button variant={"outline"} onClick={
                        () => {
                            open("https://ko-fi.com/Tumppi066", "_blank");
                        }
                    } className="p-3 bg-kofi hover:bg-kofi-active! transition-all duration-300 group hover:pr-[20px] pr-2">
                        <div className="flex items-center gap-2 pl-[3px] pointer-events-none">
                            <Image src={kofi_logo} alt="Ko-Fi" className="w-6 h-6" />
                            <span className="max-w-0 opacity-0 group-hover:max-w-md group-hover:opacity-100 transition-all duration-300 whitespace-nowrap text-white">
                                {translate("about.support_development")}
                            </span>
                        </div>
                    </Button>
                    <Button variant={"outline"} className="bg-input/20 max-w-full grow" onClick={
                        () => {
                            setIsOpen(false);
                            closed_callback();
                        }
                    }>
                        {translate("frontend.disclaimer.ok")}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}