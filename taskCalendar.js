// Program that prompts the user to enter a day of the week.
function askDay() {
        let day = prompt ("Enter a day of the week");
        switch (day) {
            case "Monday":
                alert("Attend your online class.");
                break;
            case "Tuesday":
                alert("Do your assigned activities in google classroom.");
                break;
            case "Wednesday":
                alert("Practice our dance performance in Pathfit3.");
                break;
            case "Thursday":
                alert("Group online research in Art Appreciation.");
                break;
            case "Friday":
                alert("Submit all the requirements.");
                break;
            case "Saturday":
                alert("Do your household chores.");
                break;
            case "Sunday":
                alert("Church day and rest day.")
                break;
                default:
            alert("Try again. Not a day of the week.")
        }
    }
