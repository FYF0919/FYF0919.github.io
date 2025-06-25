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

  // 手机端悬浮目录按钮和弹窗
  // 依赖 Fluid 主题的 .toc-sidebar 目录内容

  if (window.innerWidth <= 768) {
    var toc = document.querySelector('.toc-sidebar');
    if (!toc || !toc.innerHTML.trim()) return;

    // 创建按钮
    var btn = document.createElement('button');
    btn.innerHTML = '目录';
    btn.id = 'mobile-toc-btn';
    document.body.appendChild(btn);

    // 创建弹窗
    var popup = document.createElement('div');
    popup.id = 'mobile-toc-popup';
    popup.innerHTML = '<div class="mobile-toc-content">' + toc.innerHTML + '</div>';
    document.body.appendChild(popup);

    // 按钮点击显示/隐藏弹窗
    btn.onclick = function () {
      popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    };
    // 点击弹窗外关闭
    popup.onclick = function (e) {
      if (e.target === popup) popup.style.display = 'none';
    };
  }
});