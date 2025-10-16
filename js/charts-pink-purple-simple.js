/**
 * 数据可视化交互网站 - 粉紫色主题简化版
 * 直接修改图表数据集的颜色配置，避免复杂的重写逻辑
 */

// 粉紫色主题配色方案
const PinkPurpleColorSchemes = {
    default: {
        colors: ['#ff69b4', '#da70d6', '#8a2be2', '#9370db', '#ba55d3'],
        transparentColors: [
            'rgba(255, 105, 180, 0.7)', 'rgba(218, 112, 214, 0.7)', 
            'rgba(138, 43, 226, 0.7)', 'rgba(147, 112, 219, 0.7)', 
            'rgba(186, 85, 211, 0.7)'
        ]
    },
    pastel: {
        colors: ['#ffb6c1', '#d8bfd8', '#e6e6fa', '#f8f8ff', '#fff0f5'],
        transparentColors: [
            'rgba(255, 182, 193, 0.6)', 'rgba(216, 191, 216, 0.6)', 
            'rgba(230, 230, 250, 0.6)', 'rgba(248, 248, 255, 0.6)', 
            'rgba(255, 240, 245, 0.6)'
        ]
    },
    vibrant: {
        colors: ['#ff1493', '#c71585', '#8b008b', '#9400d3', '#9932cc'],
        transparentColors: [
            'rgba(255, 20, 147, 0.8)', 'rgba(199, 21, 133, 0.8)', 
            'rgba(139, 0, 139, 0.8)', 'rgba(148, 0, 211, 0.8)', 
            'rgba(153, 50, 204, 0.8)'
        ]
    },
    monochrome: {
        colors: ['#ffb6c1', '#ffa7b8', '#ff98af', '#ff89a6', '#ff7a9d'],
        transparentColors: [
            'rgba(255, 182, 193, 0.9)', 'rgba(255, 167, 184, 0.9)', 
            'rgba(255, 152, 175, 0.9)', 'rgba(255, 137, 166, 0.9)', 
            'rgba(255, 122, 157, 0.9)'
        ]
    }
};

// 应用粉紫色主题到图表数据
function applyPinkPurpleTheme() {
    const colorScheme = document.getElementById('color-scheme')?.value || 'default';
    const scheme = PinkPurpleColorSchemes[colorScheme] || PinkPurpleColorSchemes.default;
    
    // 更新所有图表数据集的颜色
    Object.keys(chartData).forEach(chartType => {
        const chart = chartData[chartType];
        if (chart && chart.datasets) {
            chart.datasets.forEach((dataset, index) => {
                // 应用新的颜色方案
                dataset.backgroundColor = scheme.transparentColors[index % scheme.transparentColors.length];
                dataset.borderColor = scheme.colors[index % scheme.colors.length];
                dataset.pointBackgroundColor = scheme.colors[index % scheme.colors.length];
                dataset.pointBorderColor = '#ffffff';
                
                // 特殊处理饼图和环形图
                if (chartType === 'pie' || chartType === 'radar') {
                    // 为每个数据点分配不同的颜色
                    if (!dataset.backgroundColor || Array.isArray(dataset.backgroundColor)) {
                        dataset.backgroundColor = scheme.colors.slice(0, chart.labels.length);
                    }
                }
            });
        }
    });
}

// 扩展ChartManager的init方法
const originalInit = ChartManager.init;
ChartManager.init = function(type = 'line') {
    // 先应用主题
    applyPinkPurpleTheme();
    // 再调用原始初始化方法
    originalInit.call(this, type);
};

// 扩展applyOptions方法
if (ChartManager.applyOptions) {
    const originalApplyOptions = ChartManager.applyOptions;
    ChartManager.applyOptions = function() {
        applyPinkPurpleTheme();
        originalApplyOptions.call(this);
    };
}

// 页面加载完成后应用主题
document.addEventListener('DOMContentLoaded', function() {
    // 延迟应用主题，确保所有元素已加载
    setTimeout(applyPinkPurpleTheme, 100);
});

// 监听配色方案变化
document.addEventListener('DOMContentLoaded', function() {
    const colorSchemeSelect = document.getElementById('color-scheme');
    if (colorSchemeSelect) {
        colorSchemeSelect.addEventListener('change', function() {
            applyPinkPurpleTheme();
            // 重新初始化当前图表
            if (ChartManager.currentChart) {
                ChartManager.init(ChartManager.currentType);
            }
        });
    }
});