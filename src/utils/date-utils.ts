
// Gets the 'date' url param (used to spoof different dates)
export const getDateParam = ():string|null => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const date = urlParams.get('date');
    return date;
}

// Gets the current data in the format used to retrieve games
export const getCurrentDate = ():string => {
    const date = new Date();
    const year = date.toLocaleString("default", { year: "numeric" });
    const month = date.toLocaleString("default", { month: "2-digit" });
    const day = date.toLocaleString("default", { day: "2-digit" });
    return year + "_" + month + "_" + day;
}

// Checks that dates are in the expected format: 'YYYY_MM_DD'
export const isValidDateFormat = (date:string):boolean => {
    const regex = /^[0-9]{4}[_][0-9]{2}[_][0-9]{2}$/g
    return regex.test(date);
}