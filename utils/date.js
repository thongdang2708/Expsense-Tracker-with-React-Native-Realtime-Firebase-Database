
export const returnDate = (dateInput) => {

    let year = dateInput.getFullYear();
    let month = dateInput.toLocaleDateString("default", {month: "long"});
    let date = dateInput.getDate();

    return `${year} - ${month} - ${date}`;
    
};

export const returnMilli = (date, days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}