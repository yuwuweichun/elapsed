// script.js

// 设置目标时间 精确到毫秒
const targetDate = new Date('2024-08-15T23:42:08.150');

function calculateElapsedTime() {
    const now = new Date();
    const elapsedTime = now - targetDate;

    // 计算各个时间单位并保留一位小数
    const seconds = (elapsedTime / 1000).toFixed(0);
    const minutes = (elapsedTime / 60000).toFixed(1);
    const hours = (elapsedTime / 3600000).toFixed(2);
    const days = (elapsedTime / 86400000).toFixed(3);
    const weeks = (days / 7).toFixed(4);
    const months = (days / 30).toFixed(5);
    const years = (months / 12).toFixed(6);

    // 创建显示内容
    const output = `
        <div>C君 这里是计时君哦(●'◡'●)</div>
        <div>计时君是在</div>
        <div><p>2024-8-15 23:44:08.15</p></div>
        <div>这一刻出生的 想必这是一个很特殊的时间吧！ </div>
        <div>嗯嗯 计时君在这个世界上已经度过了:</div>

        <div class="time-item"><span>${seconds}</span><span>秒</span></div>
        <div class="time-item"><span>${minutes}</span><span>分</span></div>
        <div class="time-item"><span>${hours}</span><span>时</span></div>
        <div class="time-item"><span>${days}</span><span>天</span></div>
        <div class="time-item"><span>${weeks}</span><span>周</span></div>
        <div class="time-item"><span>${months}</span><span>月</span></div>
        <div class="time-item"><span>${years}</span><span>年</span></div>

        <div>计时君觉得 此刻有个人正在想C君哦!(づ￣ 3￣)づ</div>
    `;

    // 显示结果
    document.getElementById('elapsed-time').innerHTML = output;
}

// 每秒更新一次
setInterval(calculateElapsedTime, 1000);

// 初始调用
calculateElapsedTime();
