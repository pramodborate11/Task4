

document.addEventListener("DOMContentLoaded", function () {
    
    const heading = document.createElement("h2");
    heading.textContent = "How do you plan to use?";
    document.body.appendChild(heading);

    
    const checkboxList = document.createElement("ul");


    function createCheckboxItem(labelText) {
        const checkboxItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "usage";
        checkbox.value = labelText; 
        const label = document.createElement("label");
        label.textContent = labelText;

        checkboxItem.appendChild(checkbox);
        checkboxItem.appendChild(label);

        checkboxList.appendChild(checkboxItem);
    }

    createCheckboxItem("Receive money from customers");
    createCheckboxItem("Pay suppliers or contractors");
    createCheckboxItem("Pay salaries");
    createCheckboxItem("Pay dividents");
    createCheckboxItem("Something else");

    document.body.appendChild(checkboxList);


    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    document.body.appendChild(submitButton);


    submitButton.addEventListener("click", function () {
      
        window.location.href = "create-account4.js";
    });
});
