document.addEventListener('DOMContentLoaded', function () {
  const emailIcon = document.querySelector('.copy-email');
  if (emailIcon) {
    emailIcon.addEventListener('click', function (e) {
      e.preventDefault();
      const email = 'yifengfang0919@outlook.com';
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function () {
          showCopyTip('邮箱已复制');
        });
      } else {
        // 兼容旧浏览器
        const input = document.createElement('input');
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showCopyTip('邮箱已复制');
      }
    });
  }

  function showCopyTip(msg) {
    let tip = document.createElement('div');
    tip.innerText = msg;
    tip.style.cssText = 'position:fixed;top:30%;left:50%;transform:translate(-50%,-50%);background:#333;color:#fff;padding:10px 20px;border-radius:5px;z-index:9999;font-size:16px;';
    document.body.appendChild(tip);
    setTimeout(() => document.body.removeChild(tip), 1500);
  }
});