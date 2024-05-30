function calculate() {
    const integral = (f, a, b, n = 1000) => {   // สำหรับการทำ integral
        const dx = (b - a) / n;
        let sum = 0.5 * (f(a) + f(b));
        for (let i = 1; i < n; i++) {
            sum += f(a + i * dx);
        }
        return sum * dx;
    };

    const integrandArea = (x) => (1/5) * (400 - x**2); //แทนค่าเข้าไปในสูตรเเพื่อหาพื้นที่ทั้งหมด 400 , 1/5
    const integrandInertia = (x) => x**2 * (1/5) * (400 - x**2); // moment of inertia

    const A = integral(integrandArea, -20, 20);
    const I_y = integral(integrandInertia, -20, 20);
    const r_y = Math.sqrt(I_y / A);  // 

    document.getElementById("result").innerText = `Radius of Gyration (r_y): ${r_y.toFixed(2)} mm`;
}

document.getElementById('inertiaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // ค่า x ช่วงที่กำหนดในปัญหา
    const xStart = 0;//add
    const xEnd = 4;//add

    // คำนวณโมเมนต์ความเฉื่อย
    const result = calculateInertia(xStart, xEnd);
    document.getElementById('inertiaResult').textContent = result.toFixed(3) + ' m^4';
});

function calculateInertia(xStart, xEnd) {
    // คำนวณอินทิกรัลของ x^(3/2) จาก xStart ถึง xEnd
    const integralValue = (1/3) * (2/5) * (Math.pow(xEnd, 5/2) - Math.pow(xStart, 5/2));
    return integralValue;
}