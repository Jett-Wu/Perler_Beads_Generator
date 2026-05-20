# Perler Beads Generator

Live demo: https://jett-wu.github.io/Perler_Beads_Generator/

> 一个强大的拼豆图纸生成与编辑工具，可将图片转换为可打印的拼豆图纸，并提供 MARD 色卡匹配、图层编辑、3D 预览、用量统计和高清导出。

<!-- 将应用截图保存为 docs/screenshot.png 后，可取消下一行注释。 -->
<!-- ![Perler Beads Generator workspace](docs/screenshot.png) -->

## 功能

- 图片转图纸：按拼豆格区域采样图片，支持卡通 / 写实生成风格、色数上限、容差和背景处理。
- 拼豆板设置：内置 52 * 52、78 * 78、104 * 104、156 * 156 等常用拼豆板尺寸，也支持自定义宽高。
- MARD 色卡：内置 MARD 基础版 221 色与完整版 291 色，可按色号组筛选和选择颜色。
- 编辑工具：画笔、橡皮、填充、消除、换色、吸管、移动、复制、粘贴、镜像、形状。
- 图层系统：支持多图层、显示 / 隐藏、锁定、重命名、复制、拖拽排序、只看当前图层、按图层计入用量。
- 参考图临摹：可单独上传参考图，调整透明度、显示位置、拖动和缩放，方便手动临摹或核对图案。
- 画布视图：支持圆形 / 方形豆显示、网格、坐标、色号显示和重叠格子提示。
- 当前图层调整：支持亮度、对比度、饱和度、色温、色相、颜色整理、色数上限、反色、灰阶和黑白效果。
- 3D 预览：实时预览拼豆效果，支持放大查看，并跟随圆形 / 方形豆显示模式。
- 用量统计：按颜色统计颗数，支持设置每包数量，并估算每种颜色所需包数。
- 导出图纸：支持高清 PNG 和 PDF，导出时可选择图案尺寸 / 画布尺寸、是否显示色号和辅助线。
- 导出用量：导出 Excel 用量清单，包含总数和各图层用量。
- 编辑记录：支持导出 / 导入 JSON 编辑记录，用于继续编辑历史项目。
- 本地处理：图片转换和编辑都在浏览器本地完成，不会上传图片到服务器。

## 本地运行

```bash
npm install
npm run dev
```

默认预览地址：

```text
http://127.0.0.1:5174/
```

## 构建

```bash
npm run build
```

构建产物会输出到：

```text
generated/dist/
```

## GitHub Pages 部署

项目已经包含 GitHub Actions 部署工作流：

```text
.github/workflows/deploy.yml
```

部署方式：

1. 推送代码到 `main` 分支。
2. 打开 GitHub 仓库的 `Settings -> Pages`。
3. 将 `Build and deployment` 设置为 `GitHub Actions`。
4. 后续每次推送到 `main` 都会自动构建并部署到 GitHub Pages。

## 文件结构

```text
.github/workflows/
  deploy.yml             # GitHub Pages 自动构建和部署

scripts/
  clean-dist.cjs         # 清理 generated/dist 构建目录
  post-build.cjs         # 拷贝样式与 vendor 文件，修正构建产物引用
  write-html.cjs         # 写入 GitHub Pages 使用的静态 HTML
  dev-server.cjs         # 本地静态预览服务器

src/
  App.tsx                # 应用状态、布局、顶栏、左右面板和主要交互
  WorkspaceCanvas.tsx    # 2D 拼豆画布、绘制工具、参考图、移动复制等编辑逻辑
  ThreePreview.tsx       # 3D 拼豆预览
  imageToBeads.ts        # 图片转拼豆图纸算法
  palette.ts             # MARD 色卡、色号分组和颜色匹配
  project.ts             # 项目数据、图层、自动保存和兼容导入
  exporters.ts           # PNG / PDF 图纸、Excel 用量、JSON 编辑记录导出
  usage.ts               # 用量统计和无相邻拼豆检测
  types.ts               # 共享类型定义
  styles.css             # 全局样式
  main.tsx               # React 入口

generated/
  .gitkeep               # 保留目录；构建产物和本地日志会被忽略

index.html               # 开发入口 HTML
package.json             # 项目脚本和依赖
tsconfig.json            # TypeScript 配置
tsconfig.build.json      # 构建输出配置
```

## 技术栈

- React
- TypeScript
- Three.js
- Canvas API

## 数据说明

- MARD 色卡用于颜色匹配和界面显示，实际拼豆颜色可能受批次、光线和屏幕显示影响。
- 导入图片生成图纸时，应用会按拼豆格对应的图片区域采样，而不是只读取单个像素。
- 导出的 JSON 编辑记录可用于恢复项目，但不是通用图片格式。

---

# Perler Beads Generator

Live demo: https://jett-wu.github.io/Perler_Beads_Generator/

> A powerful Perler bead pattern editor for turning images into printable bead charts with MARD color matching, layers, 3D preview, usage counting, and high-resolution exports.

<!-- Save a screenshot as docs/screenshot.png, then uncomment the next line. -->
<!-- ![Perler Beads Generator workspace](docs/screenshot.png) -->

## Features

- Image-to-pattern conversion with bead-cell area sampling, cartoon / realistic styles, color limits, tolerance, and background handling.
- Pegboard setup with common 52 * 52, 78 * 78, 104 * 104, and 156 * 156 sizes, plus custom dimensions.
- Built-in MARD palettes: Basic 221 colors and Complete 291 colors, grouped for fast browsing.
- Editing tools: pencil, eraser, fill, clear, recolor, eyedropper, move, copy, paste, mirror, and shapes.
- Layer workflow: visibility, lock, rename, duplicate, drag reorder, current-layer-only view, and per-layer usage counting.
- Reference image tracing with opacity, placement, drag, and scale controls.
- Canvas view controls for round / square beads, grid, coordinates, color codes, and overlap cells.
- Active-layer adjustments for brightness, contrast, saturation, temperature, hue, color cleanup, color limit, invert, grayscale, and black-white effects.
- Live 3D preview with an enlarged viewer and round / square bead display modes.
- Usage statistics by color, with custom beads-per-pack settings and estimated packs.
- High-resolution PNG / PDF pattern export with pattern-size / canvas-size bounds, color codes, and guide line options.
- Excel usage export with total usage and per-layer sheets.
- JSON edit record export / import for continuing previous projects.
- Local browser-side processing; uploaded images are not sent to a server.

## Local Development

```bash
npm install
npm run dev
```

Default preview URL:

```text
http://127.0.0.1:5174/
```

## Build

```bash
npm run build
```

Build output:

```text
generated/dist/
```

## GitHub Pages Deployment

This project includes a GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

Deployment steps:

1. Push to the `main` branch.
2. Open `Settings -> Pages` in the GitHub repository.
3. Set `Build and deployment` to `GitHub Actions`.
4. Every push to `main` will build and deploy the site automatically.

## Project Structure

```text
.github/workflows/
  deploy.yml             # GitHub Pages build and deployment workflow

scripts/
  clean-dist.cjs         # Cleans generated/dist
  post-build.cjs         # Copies styles/vendor files and fixes built imports
  write-html.cjs         # Writes the static HTML used by GitHub Pages
  dev-server.cjs         # Local static preview server

src/
  App.tsx                # App state, layout, panels, and main interactions
  WorkspaceCanvas.tsx    # 2D editor canvas, tools, reference image, copy/move logic
  ThreePreview.tsx       # 3D bead preview
  imageToBeads.ts        # Image-to-bead conversion algorithm
  palette.ts             # MARD palettes, groups, and color matching
  project.ts             # Project data, layers, autosave, and import compatibility
  exporters.ts           # PNG / PDF pattern, Excel usage, and JSON export
  usage.ts               # Usage summary and isolated bead detection
  types.ts               # Shared TypeScript types
  styles.css             # Global styles
  main.tsx               # React entry

generated/
  .gitkeep               # Keeps the folder; build output and local logs are ignored

index.html               # Development HTML entry
package.json             # Scripts and dependencies
tsconfig.json            # TypeScript config
tsconfig.build.json      # Build output config
```

## Stack

- React
- TypeScript
- Three.js
- Canvas API

## Notes

- MARD palette colors are used for matching and display. Real bead colors may vary by batch, lighting, and screen calibration.
- Image conversion samples the image area covered by each bead cell instead of reading only a single pixel.
- JSON edit records are for restoring editable projects, not for general image exchange.
