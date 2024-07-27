"use strict"; 

function get_hours(t) {
    return Number(t.slice(0,2));
}

function get_minutes(t) {
    return Number(t.slice(3,5));
}

function compute() {
    let time_in = document.getElementById("time_in");
    let time_out = document.getElementById("time_out");
    console.log("Time in:", time_in.value, "Time out:", time_out.value);
    // these hours are in military time.  E.g.: 1 pm is 13 hours (12 + 1)
    let hour_in = get_hours(time_in.value);
    let minute_in = get_minutes(time_in.value);
    let hour_out = get_hours(time_out.value);
    let minute_out = get_minutes(time_out.value);
    
    // Your code to compute elapsed time goes here

    document.getElementById("result").innerText = "result goes here";
}

function onReady() {
    document.getElementById("compute").addEventListener("click",compute);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
} else {
    onReady();
}