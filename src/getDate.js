function getDate(d){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    let newDate = new Date(d);
    let date = newDate.getDate();
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();

    return days[newDate.getDay()]+" "+date+" "+ month+" "+year
}
export default getDate;