 // 获取图标和二维码容器
 const weixinIcon = document.getElementById('weixin-icon');
 const qrcodeContainer = document.getElementById('qrcode-container');

 // 点击图标时切换二维码的显示状态
 weixinIcon.addEventListener('click', function (event) {
     event.preventDefault(); // 阻止默认行为
     if (qrcodeContainer.style.display === 'none') {
         qrcodeContainer.style.display = 'block'; // 显示二维码
     } else {
         qrcodeContainer.style.display = 'none'; // 隐藏二维码
     }
 });

 // 点击页面其他区域时隐藏二维码
 document.addEventListener('click', function (event) {
     if (event.target !== weixinIcon && !weixinIcon.contains(event.target)) {
         qrcodeContainer.style.display = 'none'; // 隐藏二维码
     }
 });