const date = new Date()
// console.log(date); //2025-05-28T11:16:47.316Z
// console.log(date.toString()); //Wed May 28 2025 11:16:47 GMT+0000 (Coordinated Universal Time)
// console.log(date.toDateString()); // Wed May 28 2025
// console.log(date.toTimeString()); // 11:16:47 GMT+0000 (Coordinated Universal Time)
// console.log(date.toLocaleString()); // 5/28/2025, 11:16:47 AM
// console.log(date.toISOString()); // 2025-05-28T11:16:47.316Z
// console.log(date.toJSON()); // 2025-05-28T11:16:47.316Z
// console.log(date.toLocaleTimeString()); // 11:16:47 AM
// console.log(typeof date);


const myDate = new Date(2025, 4, 28, 17, 13); //we can pass parameter as year month day and time.
console.log(myDate.toLocaleString()); // 5/28/2025, 5:13:00 PM
