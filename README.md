# 数据可视化交互网站 - 粉紫色渐变主题

一个优雅的粉紫色渐变主题数据可视化网站，支持多种图表类型和交互功能。

## 🌟 项目特色

### 🎨 视觉设计
- **粉紫色渐变背景** - 从浅粉色到深紫色的平滑过渡
- **毛玻璃效果** - 半透明元素和背景模糊效果
- **圆角设计** - 现代化的界面元素
- **阴影层次** - 深度感和立体视觉效果

### 📊 丰富的图表类型
- 📈 **折线图** - 趋势分析和数据变化
- 📊 **柱形图** - 数据对比和分类展示  
- 🍕 **饼图/环形图** - 比例分布可视化
- 🔍 **散点图** - 相关性分析
- 📉 **面积图** - 堆积数据展示
- 📋 **条形图** - 水平数据比较
- 📏 **直方图** - 数据分布统计
- 📦 **箱形图** - 数据离散程度
- 🎯 **雷达图** - 多维度对比
- 📐 **误差棒图** - 数据精度展示

## 🚀 快速开始

### 方式一：直接打开
双击 `index-pink-purple.html` 文件在浏览器中打开

### 方式二：本地服务器（推荐）
```bash
# 进入项目目录
cd chpt2-master

# 启动本地服务器
python -m http.server 8080

# 在浏览器中访问
http://localhost:8080/index-pink-purple.html
```

## 📁 项目结构

```
chpt2-master/
├── index-pink-purple.html          # 粉紫色主题主页面
├── index.html                      # 默认主题主页面
├── README.md                       # 项目说明文档
├── css/
│   ├── style-pink-purple.css       # 粉紫色主题样式
│   └── style.css                   # 默认主题样式
└── js/
    ├── data.js                     # 数据配置文件
    ├── charts.js                    # 图表核心功能
    ├── charts-utils.js              # 图表工具函数
    ├── charts-tables.js             # 表格处理功能
    ├── charts-events.js             # 事件处理逻辑
    ├── charts-pink-purple-simple.js # 粉紫色主题配置
    └── main.js                     # 主程序入口
```

## ⚡ 核心功能

### 交互操作
- 🔄 **图表切换** - 点击导航栏快速切换图表类型
- 🎛️ **实时配置** - 右侧面板调整图表参数
- 📝 **数据编辑** - 在线编辑表格数据
- 💾 **图表下载** - 保存图表为图片格式
- ⌨️ **键盘快捷键** - 提升操作效率

### 配色方案
1. **默认方案** - 标准粉紫色调
2. **柔和色方案** - 低饱和度，减少视觉疲劳
3. **鲜艳色方案** - 高对比度，突出重点
4. **单色方案** - 统一色调，专业简洁

### 配置选项
- **图表类型** - 10种不同的可视化方式
- **配色方案** - 多种颜色主题选择
- **动画速度** - 可调节的过渡动画
- **显示控制** - 图例、网格、数据标签开关

## 🎯 使用指南

### 基本操作
1. **选择图表类型** - 点击顶部导航栏的图表名称
2. **调整配置** - 使用右侧面板的选项进行个性化设置
3. **交互操作** - 使用控制按钮进行数据编辑和图表下载

### 键盘快捷键
- `Ctrl + S` - 下载当前图表
- `Ctrl + E` - 进入数据编辑模式  
- `Ctrl + R` - 重置数据到初始状态

### 数据操作
1. 点击"编辑数据"按钮进入编辑模式
2. 在表格中直接修改数据值
3. 点击"应用更改"更新图表显示
4. 点击"重置数据"恢复原始数据

## 🛠️ 技术栈

- **前端框架**: HTML5 + CSS3 + JavaScript (ES6+)
- **图表库**: Chart.js 3.x
- **布局系统**: CSS Grid + Flexbox
- **样式特性**: CSS变量、渐变、动画、模糊效果
- **交互功能**: 原生DOM操作和事件处理

## 🌈 粉紫色主题特色

### 配色方案详情
```css
/* 主要颜色定义 */
--primary-pink: #ff69b4;      /* 热粉色 */
--primary-purple: #8a2be2;    /* 蓝紫色 */
--accent-color: #da70d6;      /* 兰花紫 */
--light-pink: #ffb6c1;        /* 浅粉红 */
--light-purple: #d8bfd8;       /* 蓟紫色 */
```

### 响应式设计
- 📱 移动端完美适配
- 💻 桌面端优化显示
- 🖥️ 大屏幕支持

## 🔧 开发说明

### 自定义主题
要修改主题颜色，编辑 `css/style-pink-purple.css` 文件：

```css
/* 修改主要渐变背景 */
body {
    background: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
}

/* 修改头部颜色 */
header {
    background: linear-gradient(135deg, #主色1 0%, #主色2 100%);
}
```

### 扩展图表类型
在 `js/charts.js` 中添加新的图表方法：

```javascript
ChartManager.createYourChart = function(ctx) {
    this.currentChart = new Chart(ctx, {
        type: 'your-chart-type',
        data: yourData,
        options: yourOptions
    });
};
```

## 📊 数据格式

图表数据采用标准Chart.js格式：

```javascript
const chartData = {
    line: {
        labels: ['标签1', '标签2', '标签3'],
        datasets: [{
            label: '数据集名称',
            data: [10, 20, 30],
            backgroundColor: 'rgba(255, 105, 180, 0.2)',
            borderColor: 'rgba(255, 105, 180, 1)',
            borderWidth: 1
        }]
    }
};
```

## 🌐 浏览器兼容性

| 浏览器 | 版本要求 | 支持状态 |
|--------|----------|----------|
| Chrome | 60+ | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |

## 🐛 故障排除

### 常见问题
1. **图表不显示** - 检查浏览器控制台是否有错误信息
2. **颜色不生效** - 确保JavaScript文件正确加载
3. **交互无响应** - 验证事件监听器是否正确绑定

### 解决方案
- 刷新页面重新加载
- 检查网络连接和文件路径
- 查看浏览器开发者工具的错误信息

## 📄 许可证

本项目基于开源协议发布，欢迎学习和使用。

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目！

1. Fork本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 📞 联系信息

如有问题或建议，欢迎通过以下方式联系：

- 📧 邮箱：项目维护者邮箱
- 💬 Issue：在GitHub仓库提交Issue

---

**开始享受粉紫色主题的数据可视化体验吧！** 🌸💜

> 提示：建议使用现代浏览器获得最佳体验效果