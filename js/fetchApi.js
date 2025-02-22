function sendEmail(event) {
    event.preventDefault();

    const formData = new FormData(document.getElementById('contactForm'));
    const urlParams = new URLSearchParams(formData);

    fetch('http://localhost:5500/mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlParams.toString(),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // 修改: 将 .json() 改为 .text()
    })
    .then(data => {
        document.getElementById('formMessage').innerHTML = `<span style="color: green;">作者收到了wuo，感谢您的来信！</span>`; // 更新成功提示信息
        document.getElementById('contactForm').reset(); // 清空表单
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('formMessage').innerHTML = `<span style="color: red;">${error.message}</span>`; // 显示错误信息
    });
}

document.getElementById('contactForm').addEventListener('submit', sendEmail);