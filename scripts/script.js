/*
    Author: Kaine van Ommeren
    Date: 20-12-2021
    Subject: Project portfolio website
*/

// Berekent vanaf datum '30-09-2000' mijn leeftijd en update jaarlijks
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
document.getElementsById("age").innerHTML = getAge("2000/09/30");

function toggleMobileMenu(menu)
{
    menu.classList.toggle('open');
}

var average = [
        ["Plannen & Ontwerpen",7],
        ["Realiseren",7.6],
        ["Testen & Verbeteren",8.8],
        ["Computervaardigheden",7.7],
        ["Burgerschap",8.5],
        ["Nederlands",6.5],
        ["Engels",8],
        ["Rekenen",3.9]
];
console.log(average);

function StartedCourse(date) 
{
    var monthStarted = new Date();
    var currentMonth = new Date(date);
    var d = monthStarted.getMonth() - currentMonth.getMonth();
    if (d < 0 || (d === 0 && monthStarted.getMonth() < currentMonth.getMonth())) {
        date--
    }     
    return date;
}
document.getElementById("courseMonth").innerHTML = date("2021/08/01");