let myLeads = [];

const input_el = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click",function() {
    console.log("Button Cliked by Event Listener");
    myLeads.push("www.awesomelead.com");
    myLeads.push(input_el.value)
    console.log(myLeads);
})

