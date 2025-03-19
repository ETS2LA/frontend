"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translate, isChangingLanguage } from '@/apis/translation';
import '../app/language-transition.css';

export function LanguageTransition() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 监听语言切换状态变化
        setIsVisible(isChangingLanguage);
    }, [isChangingLanguage]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="language-transition-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div className="language-spinner-container">
                        <div className="spinner" />
                        <p className="language-change-text">
                            {translate("frontend.changing_language")}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}