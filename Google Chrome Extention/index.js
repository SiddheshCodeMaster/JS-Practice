let myLeads = [];

const input_el = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
 
inputBtn.addEventListener("click",function() {
    console.log("Button Cliked by Event Listener");
    myLeads.push("www.awesomelead.com");
    myLeads.push(input_el.value)
    
    console.log(myLeads);

    for(var i=0; i < myLeads.length; i++)
    {
        // console.log(myLeads[i]);
        ulEl.textContent += myLeads[i] + " ";
    }
    
})