const faq_q = document.getElementsByClassName("faqQuestion");
const faq_a = document.getElementsByClassName("faqAnswer"); // This is a collection of elements



for (let i = 0; i < faq_q.length; i++) {
    faq_q[i].addEventListener("click", () => {
        const answer = faq_a[i];
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // Hide all other answers
            for (let j = 0; j < faq_a.length; j++) {
                faq_a[j].style.display = "none";
            }
            // Show the current answer
            answer.style.display = "block";
        }
    });

}

