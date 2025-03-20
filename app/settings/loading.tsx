import React, { useEffect, useState } from 'react';
import './settings.css'; // 导入正确的样式文件
import { translate } from '@/apis/translation';

const LoadingPage = ({ message = '' }) => {
    const [dots, setDots] = useState('');
    
    // 添加动态省略号效果
    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 500);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="language-transition-overlay">
            <div className="language-spinner-container">
                <div className="spinner" />
                <div className="progress-bar-container">
                    <div className="progress-bar" />
                </div>
                <p className="language-change-text">
                    {message || translate("frontend.changing_language")}{dots}
                </p>
            </div>
        </div>
    );
};

export default LoadingPage;