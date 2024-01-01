let myLeads = [];

const input_el = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
 
inputBtn.addEventListener("click",function() {
    console.log("Button Cliked by Event Listener");
    myLeads.push(input_el.value);
    input_el.value = "";
    renderLeads();
})

function renderLeads() {
    let listItems = "";
    
    for(var i=0; i < myLeads.length; i++)
    {
        // listItems += "<li>" + "<a href=' " + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a>" + "</li>" ;
        // Implementation example of Template Strings:
        listItems += 
        `<li>
            <a href='${myLeads[i]}' target='_blank'>
            ${myLeads[i]}
            </a>
        </li>`
        
        // console.log(myLeads[i]);
        // ulEl.textContent += myLeads[i] + " ";
        // ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>";
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}