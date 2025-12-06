

 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("currentYear").textContent = new Date().getFullYear();
     document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();
            });
        
function getCurrentDate() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; 
    let day = currentDate.getDate();

    
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


    return formattedDate;
}

