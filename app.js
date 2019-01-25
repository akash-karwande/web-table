var number = parseInt(prompt("Enter a number"));

if (!isNaN(number)) {

  for (i = 1; i <= 10; i++){
    var result = i + "*" + number + " = " + (i*number);

    document.write("<p>" + result + "</p>");
 }
  
}
