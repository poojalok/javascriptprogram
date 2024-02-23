const printDailyMenu = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday Menu: Spaghetti Bolognese");
            break;
        case 'tuesday':
            console.log("Tuesday Menu: Grilled Chicken Salad");
            break;
        case 'wednesday':
            console.log("Wednesday Menu: Vegetarian Pizza");
            break;
        case 'thursday':
            console.log("Thursday Menu: Maharashtra Breakfast");
            break;
        case 'friday':
            console.log("Friday Menu: Italic");
            break;
        case 'saturday':
            console.log("Saturday Menu: ");
            break;
        case 'sunday':
            console.log("Sunday Menu: Non Veg");
            break;
        default:
            console.log("Invalid day. Please enter a valid day of the week.");
    }
};

printDailyMenu('Monday');
printDailyMenu('Wednesday');
printDailyMenu('Sunday');
