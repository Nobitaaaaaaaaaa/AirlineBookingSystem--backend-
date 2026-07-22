function compareTime(date1, date2) {
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();
    return time1 > time2;
}