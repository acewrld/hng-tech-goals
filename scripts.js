document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    function updateTime() {
        const now = new Date();
        currentTimeUTC.textContent = `Current Time (UTC): ${now.toUTCString()}`;
        currentDay.textContent = `Current Day: ${now.toLocaleString('en-US', { weekday: 'long' })}`;
    }

    updateTime();
    setInterval(updateTime, 1000); // Update time every second
});