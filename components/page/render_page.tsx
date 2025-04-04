import { ETS2LAPage } from "@/components/page/page";
import { GetPage } from "@/apis/backend";
import useSWR from "swr";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../loader";

export default function RenderPage({ url, className }: { url: string, className?: string }) {
    const [refreshInterval, setRefreshInterval] = useState(1000); 
    const [showTooLong, setShowTooLong] = useState(false);
    const [start, setStart] = useState(Date.now());
    const [loaded, setLoaded] = useState(false);
    const {data: page} = useSWR("page " + url, () => GetPage(url), { refreshInterval: refreshInterval });

    useEffect(() => {
        if (page) {
            setLoaded(true);
            console.log(page);
        }
        if (page && page[1] && "refresh_rate" in page[1]) {
            setRefreshInterval(page[1]["refresh_rate"] * 1000);
        }
    }, [page]);

    useEffect(() => {
        setStart(Date.now());
        setTimeout(() => {
            setShowTooLong(true);
        }, 3000);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {!loaded && (
                <motion.div className="w-full h-full flex flex-col items-center justify-center gap-2 font-geist" layout key="loading" exit={{ opacity: 0 }} transition={{ duration: Date.now() - start > 0.5 && 0.25 || 0 }} >
                    <Loader className={"opacity-50"} />
                    <p className="text-muted-foreground text-xs text-center">
                        Fetching page...
                        {showTooLong && 
                            <motion.p className="text-muted-foreground text-xs" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 15 }} transition={{ duration: 0.4}}>
                                This page might not exist, or it has an error loading.
                            </motion.p>
                        }
                    </p>
                </motion.div>
            ) || page && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: Date.now() - start > 0.5 && 0.6 || 0 }}
                    key="page"
                >
                    <ETS2LAPage plugin={page[0]["settings"]} data={page} enabled={true} className={className} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}