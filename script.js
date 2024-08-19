function generateRandomNumber() {
    const randomNumber = (Math.random() * 10).toFixed(2); // عدد عشري بين 0 و 10 مع رقمين بعد الفاصلة
    document.getElementById('numberDisplay').innerText = randomNumber;
}