require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5500;

// 设置 CORS 中间件来允许跨域请求
app.use(cors());

// 设置 body-parser 中间件来解析表单数据
app.use(bodyParser.urlencoded({ extended: true }));

// 设置静态文件目录
app.use(express.static('../'));

// 处理表单提交
app.post('/mail.php', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // 验证表单数据
        if (!name || !email || !subject || !message) {
            console.error('Missing form data:', { name, email, subject, message });
            return res.status(400).send('All fields are required.');
        }

        console.log('Received form data:', { name, email, subject, message });

        // 创建 nodemailer 传输对象
        let transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: process.env.QQ_EMAIL, // 替换为你的QQ邮箱地址
                pass: process.env.QQ_PASSWORD // 替换为你的QQ邮箱SMTP密码
            }
        });

        // 设置邮件内容
        let mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.QQ_EMAIL, // 替换为你的QQ邮箱地址
            subject: subject,
            html: `
                <h2>Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        // 发送邮件
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        // 返回成功响应
        res.status(200).send('作者收到了wuo，感谢您的来信！');
    } catch (error) {
        console.error('Error processing request:', error);
        if (error.response) {
            console.error('Error details:', error.response);
        }
        if (error.message) {
            console.error('Error message:', error.message);
        }
        if (error.stack) {
            console.error('Error stack:', error.stack);
        }
        res.status(500).send('Internal Server Error');
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});