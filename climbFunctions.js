const mountain2Tab = document.getElementById("mountain_2_tab");
const mountainChange = document.getElementById("mountain_picture");
const mountain1Tab = document.getElementById("mountain_1_tab");
const backgroundTab1 = document.getElementById("selected_tab");
const backgroundTab2 = document.getElementById("selected_tab_2");
const scheduleText1 = document.getElementById("schedule_table");
const scheduleText2 = document.getElementById("schedule_table_2");

mountain2Tab.addEventListener("click", function() {
    mountainChange.src = "images/ClimbBackground2.png";
    backgroundTab2.style.display = "block";
    backgroundTab1.style.display = "none";
    mountain1Tab.style.color = "#b0b4be";
    mountain2Tab.style.color = "#414f6b";
    scheduleText1.style.display = "none";
    scheduleText2.style.display = "table";
});

mountain1Tab.addEventListener("click", function() {
    mountainChange.src = "images/ClimbBackground1.png";
    backgroundTab1.style.display = "block";
    backgroundTab2.style.display = "none";
    mountain2Tab.style.color = "#b0b4be";
    mountain1Tab.style.color = "#414f6b";
    scheduleText2.style.display = "none";
    scheduleText1.style.display = "table";
})