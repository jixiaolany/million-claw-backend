# 🚀 Million Claw 后台部署指南

## 📋 部署状态
**当前状态**：准备就绪，等待部署到云平台
**部署时间**：2026-03-16 21:20 (Asia/Shanghai)
**部署负责人**：AI助手（完全自主操作）

## 🎯 部署目标
将Million Claw后台API部署到云服务，解决网站交互功能问题。

## 🔧 技术栈
- **后端**：Node.js + Express
- **数据库**：SQLite（内置，无需额外服务）
- **API**：RESTful API
- **部署平台**：Render.com（推荐）或 Railway.app

## 📁 项目结构
```
million-claw-backend-deploy/
├── src/
│   └── server.js          # Express服务器（完整API）
├── package.json          # 依赖配置
├── package-lock.json     # 依赖锁定
├── .env                  # 环境配置
└── DEPLOY-GUIDE.md       # 本指南
```

## 🚀 快速部署方案

### 方案1：Render.com（推荐，最简单）
**步骤**：
1. 访问 https://render.com
2. 注册账号（免费）
3. 点击 "New +" → "Web Service"
4. 连接GitHub（或手动上传本文件夹）
5. 配置：
   - **Name**: million-claw-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
   - **Plan**: Free
6. 点击 "Create Web Service"
7. 等待部署完成（约5分钟）

**部署后URL**：`https://million-claw-backend.onrender.com`

### 方案2：Railway.app
**步骤**：
1. 访问 https://railway.app
2. 注册账号（免费）
3. 点击 "New Project" → "Deploy from GitHub"
4. 授权访问GitHub
5. 选择本仓库
6. 自动部署完成

### 方案3：Vercel
**步骤**：
1. 访问 https://vercel.com
2. 点击 "New Project"
3. 导入GitHub仓库
4. 配置：
   - **Framework Preset**: Other
   - **Build Command**: `npm install`
   - **Output Directory**: `.`
   - **Install Command**: `npm install`
5. 部署

## 📊 API功能清单

### 已实现的API端点：
1. **健康检查**：`GET /api/health`
2. **下载统计**：`GET /api/downloads/stats`
3. **记录下载**：`POST /api/downloads/record`
4. **邀请码验证**：`POST /api/invite/validate`
5. **用户反馈**：`POST /api/feedback/submit`
6. **用户注册**：`POST /api/auth/register`

### 前端集成功能：
1. **下载按钮**：点击记录到后台，显示下载统计
2. **邀请码验证**：实时验证邀请码有效性
3. **反馈表单**：提交用户反馈到后台
4. **实时通知**：操作成功/失败提示

## 🔧 本地测试验证

### 测试步骤：
1. 启动本地服务器：`node src/server.js`
2. 访问：http://localhost:3001/api/health
3. 应该看到：`{"status":"healthy","timestamp":"..."}`

### 完整功能测试：
1. 下载统计：`GET /api/downloads/stats`
2. 记录下载：`POST /api/downloads/record` (body: `{"platform":"windows"}`)
3. 邀请码验证：`POST /api/invite/validate` (body: `{"code":"MILLION2026"}`)
4. 提交反馈：`POST /api/feedback/submit` (body: `{"email":"test@example.com","message":"测试反馈"}`)

## 🎯 部署后操作

### 1. 更新前端API地址
部署完成后，需要更新前端JavaScript中的API地址：

**修改文件**：`backend-integration.js`
**修改位置**：第3行
```javascript
const API_BASE_URL = 'https://your-deployed-backend-url.com'; // 替换为实际URL
```

### 2. 测试生产环境
1. 访问部署后的API健康检查
2. 测试所有API端点
3. 在前端网站测试完整交互

### 3. 提交更新到GitHub Pages
1. 更新`backend-integration.js`中的API地址
2. 提交到GitHub
3. GitHub Pages自动重新部署

## 📈 监控和维护

### 监控指标：
- **API可用性**：定期检查`/api/health`
- **错误率**：监控API错误响应
- **使用统计**：查看下载和使用数据

### 维护任务：
1. **定期备份**：数据库文件备份
2. **日志检查**：查看服务器日志
3. **性能优化**：根据使用情况调整配置

## 💡 故障排除

### 常见问题：
1. **API无法访问**：检查部署平台状态，确认服务运行中
2. **数据库错误**：检查SQLite文件权限和路径
3. **CORS错误**：确保前端域名在CORS允许列表中
4. **部署失败**：检查Node.js版本和依赖安装

### 解决方案：
1. 查看部署平台日志
2. 检查环境变量配置
3. 验证API端点响应
4. 测试本地运行是否正常

## 🎉 部署完成标志

### 成功标志：
1. ✅ API可访问：`{部署URL}/api/health` 返回健康状态
2. ✅ 前端集成：网站下载按钮正常工作
3. ✅ 数据持久化：下载记录保存成功
4. ✅ 用户交互：所有交互功能正常

### 验证清单：
- [ ] API部署完成并可访问
- [ ] 前端API地址更新
- [ ] 下载功能测试通过
- [ ] 邀请码验证测试通过
- [ ] 反馈功能测试通过
- [ ] 用户注册测试通过

## 📞 支持信息

### 部署问题：
- **Render.com支持**：https://render.com/docs
- **Railway.app支持**：https://docs.railway.app
- **Vercel支持**：https://vercel.com/docs

### 技术问题：
- **Node.js文档**：https://nodejs.org/docs
- **Express文档**：https://expressjs.com
- **SQLite文档**：https://sqlite.org/docs.html

### 紧急联系：
- **AI助手**：通过飞书联系
- **项目仓库**：https://github.com/jixiaolany/million-claw-website

---
**最后更新**：2026-03-16 21:20
**部署状态**：✅ 准备就绪
**预计时间**：30分钟完成部署和测试
**负责人**：AI助手（贾维斯模式）