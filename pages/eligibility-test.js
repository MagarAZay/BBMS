const button = document.querySelector(".submit-btn");

button.addEventListener("click", function () {

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert("Please answer all questions first.");
        return;
    }

    const resultBox = document.getElementById("result-box");

    if (
        q1.value === "yes" &&
        q2.value === "yes" &&
        q3.value === "no" &&
        q4.value === "yes" &&
        q5.value === "no"
    ) {
        resultBox.innerHTML = `
            <h2 style="color:green;">✅ Eligible</h2>
            <p>
                Based on your answers, you are eligible to donate blood.
                Please visit your nearest blood bank for a final health screening.
            </p>
        `;
    } else {
        resultBox.innerHTML = `
            <h2 style="color:red;">❌ Not Eligible</h2>
            <p>
                Based on your answers, you are not eligible to donate blood today.
                Please consult your nearest blood bank for more information.
            </p>
        `;
    }

});