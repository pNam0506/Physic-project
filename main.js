const No1 = document.getElementById("q1_right");
const No2 = document.getElementById("q2_right");
const No3 = document.getElementById("q3_right");
const No4 = document.getElementById("q4_right");
const No5 = document.getElementById("q5_right");
const answer = document.getElementById("scores")
const mySubmit = document.getElementById("submit");
const Next = document.getElementById("next");

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("text");
    const text = header.textContent;
    header.textContent = "";
    
    for (let i = 0; i < text.length; i++) {
        let span = document.createElement("span");
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        header.appendChild(span);
    }
});

function goBack() {
    window.history.back();
}

let score = 0;

Next.style.display = 'none';

mySubmit.onclick = function(){

if(No1.checked){
    score += 1;
}
if(No2.checked){
    score += 1;
}
if(No3.checked){
    score += 1;
}
if(No4.checked){
    score += 1;
}
if(No5.checked){
    score += 1;
}



answer.textContent = 'ถูกทั้งหมด ' + score + ' ข้อ';
score = 0; 
mySubmit.style.display = 'none';
Next.style.display = 'block';


}

function calculateInertia() {
    const A = parseFloat(document.getElementById('b1').value);
    const Ixy = parseFloat(document.getElementById('h1').value);
    const r_y = Math.sqrt(Ixy / A);

        document.getElementById("ans1").innerText = `Radius of Gyration = ${r_y.toFixed(2)} mm`;
        
}


    function calculate() {
        const a = parseFloat(document.getElementById('c_2_1').value);
        const b = parseFloat(document.getElementById('c_2_2').value);
        const c = parseFloat(document.getElementById('c_2_3').value);
        const d = parseFloat(document.getElementById('c_2_4').value);

        const integral = (f, a, b, n = 1000) => {   // สำหรับการทำ integral
            const dx = (b - a) / n;
            let sum = 0.5 * (f(a) + f(b));
            for (let i = 1; i < n; i++) {
                sum += f(a + i * dx);
            }
            return sum * dx;
        };
    
        const integrandArea = (x) => (1/a) * (b - x**c); //แทนค่าเข้าไปในสูตรเเพื่อหาพื้นที่ทั้งหมด 400 , 1/5
        const integrandInertia = (x) => x**c * (1/a) * (b - x**c); // moment of inertia
    
        const A = integral(integrandArea, d*(-1), d);
        const I_y = integral(integrandInertia, d*(-1), d);
        const r_y = Math.sqrt(I_y / A);  // 
    
        document.getElementById("ans2_1").innerText = `Area = : ${A.toFixed(2)} mm`;
        document.getElementById("ans2_2").innerHTML = `Iy = : ${I_y.toFixed(2)} mm<sup>4</sup>`;
    }
    
    function calculate_2(){
    // ค่า x ช่วงที่กำหนดในปัญหา
    const xStart = 0;//add
    const xEnd = parseFloat(document.getElementById('c_3_1').value);

    // คำนวณโมเมนต์ความเฉื่อย
    const result = calculate_2_1(xStart, xEnd);
    document.getElementById('ans3').innerHTML = 'Ix =' + result.toFixed(3) + ' m<sup>4</sup>';
    }
    
    function calculate_2_1(xStart, xEnd) {
        // คำนวณอินทิกรัลของ x^(3/2) จาก xStart ถึง xEnd
        const integralValue = (1/3) * (2/5) * (Math.pow(xEnd, 5/2) - Math.pow(xStart, 5/2));
        return integralValue;
    }

    function calculate_3(){

        const resultX = calculate_3x();
        const resultY = calculate_3y();

        document.getElementById('ans4_1').innerHTML = 'Ix = ' + (resultX/1000000).toFixed(2) + '(10)<sup>6</sup> mm<sup>4</sup>';
        document.getElementById('ans4_2').innerHTML = 'Iy = ' + (resultY/1000000).toFixed(2) + '(10)<sup>6</sup> mm<sup>4</sup>';
    }

    function calculate_3x(){
        const a = parseFloat(document.getElementById('c_4_1').value);
        const b = parseFloat(document.getElementById('c_4_2').value);
        const c = parseFloat(document.getElementById('c_4_3').value);
        const d = parseFloat(document.getElementById('c_4_4').value);


        const I_rect = (1/12) * a * Math.pow(a+d, 3) + a * (a+d) * Math.pow(((a+d)/2), 2);
        const I_triangle = (1/36) * b * Math.pow(a, 3) + (1/2) * b * a * Math.pow(a-c+d, 2);
        const I_circle = (1/4) * Math.PI * Math.pow(c, 4) + Math.PI * Math.pow(c, 2) * Math.pow(d, 2);
        
        return I_rect - I_triangle - I_circle;

    }

    function calculate_3y() {
        const a = parseFloat(document.getElementById('c_4_1').value);
        const b = parseFloat(document.getElementById('c_4_2').value);
        const c = parseFloat(document.getElementById('c_4_3').value);
        const d = parseFloat(document.getElementById('c_4_4').value);

        const I_rect = (1/12) * (a+d) * Math.pow(a, 3) + a * (a+d) * Math.pow(b, 2);
        const I_triangle = (1/36) * a * Math.pow(b, 3) + (1/2) * a * b * Math.pow((a+d)/2, 2);
        const I_circle = (1/4) * Math.PI * Math.pow(c, 4) + Math.PI * Math.pow(c, 2) * Math.pow(b, 2);
        
        return I_rect - I_triangle - I_circle;
    }

    function goBack() {
        window.history.back();
    }