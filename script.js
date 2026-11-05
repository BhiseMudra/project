// Learn More Button

function showMessage() {

    alert(
        "Every electronic device you recycle responsibly helps protect our environment! ♻️"
    );

}


// Quiz Function

function checkAnswer(correct) {

    let result = document.getElementById("quiz-result");

    if (correct) {

        result.innerHTML = "🎉 Correct! An old mobile phone is e-waste.";

        result.style.color = "green";

    } else {

        result.innerHTML = "❌ Try again! Think about electronic devices.";

        result.style.color = "red";

    }

}