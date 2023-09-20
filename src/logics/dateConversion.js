export const dateShow = (date) => {

    const dateNew = date.split("T")



    const actDate = dateNew[0]

    const splitDate = actDate.split("-")
    // console.log(splitDate)
    let month;

    switch (parseInt(splitDate[1])) {
        case 1:
            month = "January";
            break;
        case 2:
            month = "February";
            break;
        case 3:
            month = "March";
            break;
        case 4:
            month = "April";
            break;
        case 5:
            month = "May";
            break;
        case 6:
            month = "June";
            break;
        case 7:
            month = "July";
            break;
        case 8:
            month = "August";
            break;
        case 9:
            month = "September";
            break;
        case 10:
            month = "October";
            break;
        case 11:
            month = "November";
            break;
        case 12:
            month = "December";
            break;
        default:
            month = "Invalid Month";
            break;

    }
    // return month
    const newDate = (parseInt(splitDate[2]) + " " + month + " " + splitDate[0])
    return newDate  
    // const actTime  = dateNew[1]
    // // console.log(actTime)

    // const Time = actTime.split(":")
    // // console.log(Time)
    // let minute = parseInt(Time[1])+30
    // let hour = parseInt(Time[0])+5
    // let horizon = "AM"
    // if(minute>60){
    //     minute=minute-60
    //     hour = hour+1
    // }
    // if(hour>12){
    //      horizon = "PM"
    // }
    // // console.log(typeof(minute))
    // const newTime = (hour.toString()+":"+minute.toString()+" "+horizon)

    // const dateTime = (newTime + " " + newDate)

    // return dateTime
    // console.log(newDate)

}