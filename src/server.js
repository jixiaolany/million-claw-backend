// Million Claw 后台服务器
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 基础路由
app.get('/', (req, res) => {
    res.json({ 
        message: 'Million Claw Backend API',
        version: '1.0.0',
        status: 'running',
        timestamp: new Date().toISOString()
    });
});

// 健康检查
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// 下载统计路由
app.get('/api/downloads/stats', (req, res) => {
    // 临时模拟数据，后续连接数据库
    res.json({
        windows: 128,
        macos: 89,
        android: 256,
        total: 473,
        lastUpdated: new Date().toISOString()
    });
});

// 记录下载
app.post('/api/downloads/record', (req, res) => {
    const { platform } = req.body;
    
    if (!platform || !['windows', 'macos', 'android'].includes(platform)) {
        return res.status(400).json({ error: 'Invalid platform' });
    }
    
    // 这里后续会记录到数据库
    console.log(`📥 Download recorded: ${platform}`);
    
    res.json({ 
        success: true, 
        message: `Download recorded for ${platform}`,
        timestamp: new Date().toISOString()
    });
});

// 邀请码验证
app.post('/api/invite/validate', (req, res) => {
    const { code } = req.body;
    
    if (!code) {
        return res.status(400).json({ error: 'Invite code is required' });
    }
    
    // 有效的邀请码列表（后续从数据库获取）
    const validCodes = [
        'MILLION2026',
        'CLAWPRO',
        'OPENAI2026',
        'EARLYACCESS',
        'BETATESTER'
    ];
    
    const isValid = validCodes.includes(code.toUpperCase());
    
    res.json({
        valid: isValid,
        message: isValid ? 'Invite code is valid' : 'Invalid invite code',
        code: code.toUpperCase()
    });
});

// 提交反馈
app.post('/api/feedback/submit', (req, res) => {
    const { email, message } = req.body;
    
    if (!message || message.trim().length < 5) {
        return res.status(400).json({ error: 'Message is required and must be at least 5 characters' });
    }
    
    // 这里后续会保存到数据库
    console.log(`📝 Feedback received from ${email || 'anonymous'}: ${message.substring(0, 50)}...`);
    
    res.json({
        success: true,
        message: 'Feedback submitted successfully',
        timestamp: new Date().toISOString()
    });
});

// 用户注册（简化版）
app.post('/api/auth/register', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid email is required' });
    }
    
    // 这里后续会保存到数据库
    console.log(`👤 User registered: ${email}`);
    
    res.json({
        success: true,
        message: 'Registration successful',
        email: email,
        timestamp: new Date().toISOString()
    });
});

// 404 处理
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// 错误处理
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`🚀 Million Claw Backend Server started on port ${PORT}`);
    console.log(`📊 API Base URL: http://localhost:${PORT}`);
    console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`⏰ Started at: ${new Date().toISOString()}`);
});