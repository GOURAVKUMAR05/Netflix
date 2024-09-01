let allQuestion = document.querySelectorAll("#ques h3");
//  console.log(allQuestion)

allQuestion.forEach((Element, index) => {
    Element.addEventListener("click", () => {
        // Element.nextElementSibling.classList.add("scale-1", "h-auto")
        // Element.nextElementSibling.classList.remove("scale-0", "h-0")

        const answer = Element.nextElementSibling;
        answer.classList.toggle('scale-1');
        answer.classList.toggle('h-auto');
        answer.classList.toggle('scale-0');
        answer.classList.toggle('h-0');
        
        if (Element.children[0].innerHTML == "+") {
            Element.children[0].innerHTML = "-"

        }
        else {
            Element.children[0].innerHTML = "+"

        }

        allQuestion.forEach((e, i) => {
            if (index != i) {
                e.nextElementSibling.classList.remove("scale-1", "h-auto")
                e.nextElementSibling.classList.add("scale-0", "h-0")

                e.children[0].innerHTML = "+"
            }
        })
    })
})
