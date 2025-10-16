/**
 * 数据可视化交互网站 - 粉紫色主题图表配置
 * 扩展ChartManager对象，添加粉紫色主题配色方案
 */

// 粉紫色主题配色方案
const PinkPurpleColorSchemes = {
    default: {
        // 基础粉紫色调色板
        colors: [
            '#ff69b4', '#da70d6', '#8a2be2', '#9370db', '#ba55d3',
            '#dda0dd', '#ee82ee', '#ffb6c1', '#ffc0cb', '#db7093'
        ],
        // 透明度版本
        transparentColors: [
            'rgba(255, 105, 180, 0.7)', 'rgba(218, 112, 214, 0.7)', 'rgba(138, 43, 226, 0.7)',
            'rgba(147, 112, 219, 0.7)', 'rgba(186, 85, 211, 0.7)', 'rgba(221, 160, 221, 0.7)',
            'rgba(238, 130, 238, 0.7)', 'rgba(255, 182, 193, 0.7)', 'rgba(255, 192, 203, 0.7)',
            'rgba(219, 112, 147, 0.7)'
        ],
        // 渐变背景色
        gradientBackgrounds: [
            'linear-gradient(135deg, #ff69b4, #da70d6)',
            'linear-gradient(135deg, #8a2be2, #9370db)',
            'linear-gradient(135deg, #ba55d3, #dda0dd)',
            'linear-gradient(135deg, #ee82ee, #ffb6c1)',
            'linear-gradient(135deg, #ffc0cb, #db7093)'
        ]
    },
    
    pastel: {
        // 柔和粉紫色调色板
        colors: [
            '#ffb6c1', '#d8bfd8', '#e6e6fa', '#f8f8ff', '#fff0f5',
            '#ffe4e1', '#f5f5dc', '#fafad2', '#f0fff0', '#f5fffa'
        ],
        transparentColors: [
            'rgba(255, 182, 193, 0.6)', 'rgba(216, 191, 216, 0.6)', 'rgba(230, 230, 250, 0.6)',
            'rgba(248, 248, 255, 0.6)', 'rgba(255, 240, 245, 0.6)', 'rgba(255, 228, 225, 0.6)',
            'rgba(245, 245, 220, 0.6)', 'rgba(250, 250, 210, 0.6)', 'rgba(240, 255, 240, 0.6)',
            'rgba(245, 255, 250, 0.6)'
        ]
    },
    
    vibrant: {
        // 鲜艳粉紫色调色板
        colors: [
            '#ff1493', '#c71585', '#8b008b', '#9400d3', '#9932cc',
            '#8a2be2', '#6a5acd', '#483d8b', '#4b0082', '#800080'
        ],
        transparentColors: [
            'rgba(255, 20, 147, 0.8)', 'rgba(199, 21, 133, 0.8)', 'rgba(139, 0, 139, 0.8)',
            'rgba(148, 0, 211, 0.8)', 'rgba(153, 50, 204, 0.8)', 'rgba(138, 43, 226, 0.8)',
            'rgba(106, 90, 205, 0.8)', 'rgba(72, 61, 139, 0.8)', 'rgba(75, 0, 130, 0.8)',
            'rgba(128, 0, 128, 0.8)'
        ]
    },
    
    monochrome: {
        // 单色粉紫色调色板
        colors: [
            '#ffb6c1', '#ffa7b8', '#ff98af', '#ff89a6', '#ff7a9d',
            '#ff6b94', '#ff5c8b', '#ff4d82', '#ff3e79', '#ff2f70'
        ],
        transparentColors: [
            'rgba(255, 182, 193, 0.9)', 'rgba(255, 167, 184, 0.9)', 'rgba(255, 152, 175, 0.9)',
            'rgba(255, 137, 166, 0.9)', 'rgba(255, 122, 157, 0.9)', 'rgba(255, 107, 148, 0.9)',
            'rgba(255, 92, 139, 0.9)', 'rgba(255, 77, 130, 0.9)', 'rgba(255, 62, 121, 0.9)',
            'rgba(255, 47, 112, 0.9)'
        ]
    }
};

// 扩展ChartManager对象，添加粉紫色主题支持
Object.assign(ChartManager, {
    // 应用粉紫色主题配色方案
    applyPinkPurpleTheme: function() {
        const colorScheme = document.getElementById('color-scheme').value;
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
    },
    
    // 扩展applyOptions方法以支持粉紫色主题
    applyOptions: function() {
        // 应用粉紫色主题
        this.applyPinkPurpleTheme();
        
        // 调用原始方法
        if (this.originalApplyOptions) {
            this.originalApplyOptions();
        }
    }
});

// 保存原始applyOptions方法
ChartManager.originalApplyOptions = ChartManager.applyOptions;

// 初始化时应用粉紫色主题
document.addEventListener('DOMContentLoaded', function() {
    // 在原始初始化完成后应用主题
    setTimeout(() => {
        ChartManager.applyPinkPurpleTheme();
    }, 100);
});

// 扩展图表创建方法以支持粉紫色主题
const originalCreateMethods = {
    createLineChart: ChartManager.createLineChart,
    createBarChart: ChartManager.createBarChart,
    createPieChart: ChartManager.createPieChart,
    createScatterChart: ChartManager.createScatterChart,
    createRadarChart: ChartManager.createRadarChart
};

// 重写图表创建方法，确保正确处理图表销毁和创建
ChartManager.createLineChart = function(ctx) {
    // 先应用主题颜色，再创建图表
    this.applyPinkPurpleTheme();
    // 确保调用原始方法，避免递归
    if (originalCreateMethods.createLineChart) {
        originalCreateMethods.createLineChart.call(this, ctx);
    }
};

ChartManager.createBarChart = function(ctx) {
    this.applyPinkPurpleTheme();
    if (originalCreateMethods.createBarChart) {
        originalCreateMethods.createBarChart.call(this, ctx);
    }
};

ChartManager.createPieChart = function(ctx) {
    this.applyPinkPurpleTheme();
    if (originalCreateMethods.createPieChart) {
        originalCreateMethods.createPieChart.call(this, ctx);
    }
};

ChartManager.createScatterChart = function(ctx) {
    this.applyPinkPurpleTheme();
    if (originalCreateMethods.createScatterChart) {
        originalCreateMethods.createScatterChart.call(this, ctx);
    }
};

ChartManager.createRadarChart = function(ctx) {
    this.applyPinkPurpleTheme();
    if (originalCreateMethods.createRadarChart) {
        originalCreateMethods.createRadarChart.call(this, ctx);
    }
};

// 添加粉紫色主题的特殊效果
ChartManager.addPinkPurpleEffects = function() {
    // 为图表容器添加粉紫色主题的CSS类
    const chartContainer = document.getElementById('chart-container');
    if (chartContainer) {
        chartContainer.classList.add('pink-purple-theme');
    }
    
    // 为图表添加渐变背景效果
    const chartWrapper = document.querySelector('.chart-wrapper');
    if (chartWrapper) {
        chartWrapper.style.background = 'linear-gradient(135deg, rgba(255, 182, 193, 0.1) 0%, rgba(216, 191, 216, 0.1) 100%)';
    }
};

// 初始化时添加特效
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        ChartManager.addPinkPurpleEffects();
    }, 500);
});