 const buttons = document.querySelectorAll('.update-button');
const inputs = document.querySelectorAll('.input-number');
const values = document.querySelectorAll('.value');
const mainBalance =document.getElementById("mainbalance");
const historyDiv = document.getElementById("history-div");
const TextContent = document.querySelectorAll(".text-content");
 
// Add event listeners dynamically using a loop
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        // Get the corresponding input field value
        const inputValue = parseFloat(inputs[index].value);
        if(inputValue<0 || isNaN(inputValue)){
            alert("Invalid Donation Amount");
            inputs[index].value = "";
            return;
        }
        const mainBalanceValue = parseFloat(mainBalance.innerText);
        if(mainBalanceValue<inputValue){
            alert("Insufficient Balance");
            inputs[index].value = "";
            return;
        }
        const existingValue = parseFloat(values[index].innerText);
        mainBalance.innerText = mainBalanceValue - inputValue; 
         inputs[index].value = ""; 

        // Update the corresponding card's value
        values[index].innerText = existingValue + inputValue;
        document.getElementById("my_modal_1").showModal();

        const div = document.createElement('div');
   div.classList.add("border","p-6","rounded-xl","space-y-5");
   div.innerHTML = `<h3 class="text-xl font-bold">${inputValue} Taka is Donated ${TextContent[index].innerText}</h3>
   <p>Date: ${new Date()}</p>`
 
  historyDiv.insertBefore(div,historyDiv.firstChild);
    });
});
// history button
document.getElementById("history").addEventListener("click",function(){
    document.getElementById('history').classList.add("bg-[#B4F461]");
    historyDiv.classList.remove('hidden');
    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("donation").classList.remove("bg-[#B4F461]");
});
// donation section
document.getElementById("donation").addEventListener("click",function(){
    document.getElementById('history').classList.remove("bg-[#B4F461]");
    historyDiv.classList.add('hidden');
    document.getElementById("donate-section").classList.remove("hidden");
    document.getElementById("donation").classList.add("bg-[#B4F461]");
});
 
