// @author = "Harish"


const greet = document.getElementById("g");

const hour = document.getElementById("hour");

const min = document.getElementById("min");

const second = document.getElementById("second");

const time = document.getElementById("t");

//const day = document.getElementById("d");

const getDate = () => {

  const date = new Date();

  let year = date.getFullYear();

  let month = date.getMonth();

  let day = date.getDate();

  let fullResult = `${day}/${month}/${year}`;

  return fullResult;

}

const getExactDay = () => {

  const date = new Date();

  

  let day = date.getDay().toString();

  switch(day){

    case "1":

      return "Monday";

      break;

    case "2":

      return "Tuesday";

      break;

    case '3':

      return "Wednesday";

      break;

    case "4":

      return "Thursday";

      break;

    case "5":

      return "Friday";

      break;

    case "6":

      return "Saturday";

      break;

    case "0":

      return 'Sunday';

      break;

  }

}

setInterval(() => {

  let date = new Date();
  
  //day.innerHTML = `Day: ${getExactDay()}, Date: ${getDate()}`;

  let hr = date.getHours();

  let mn = date.getMinutes();

  let sc = date.getSeconds();

  hour.innerHTML = hr;

  second.innerHTML = sc;

  min.innerHTML = mn;

  let amorpm = date.toLocaleString('en-US', { hour: 'numeric', hour12: true }).toString()

  

  amorpm = amorpm.search("AM") == -1 ? "PM" : "AM";

  time.innerHTML = amorpm;

  

  
  

},1000)
// hello
