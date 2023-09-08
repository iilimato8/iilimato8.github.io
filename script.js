function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  
  document.getElementById('clock').innerText = timeString;
}

// 更新時間每一秒
setInterval(updateTime, 1000);
