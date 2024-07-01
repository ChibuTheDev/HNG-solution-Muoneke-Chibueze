document.addEventListener('DOMContentLoaded', function() {
    const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDay"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();

    currentDayOfTheWeekElement.textContent = daysOfWeek[now.getUTCDay()];
   
    
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    currentUTCTimeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;

});
