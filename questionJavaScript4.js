function describeFunction(temp) {
  switch (temp) {
    case '1':
      console.log(
        "The given first question is to build pyramid ,by passing a parameter height,the parameter describes the height of the pyramid and type of parameter is number"
      );
      break;
    case '2':
      console.log(
        "The given second question is to create a random report card ,the report will have 'subject','marks','status', here no argument is passed ,but we return the report card object"
      );
      break;
    case '3':
      console.log(
        "The given third question is find the maximum element in the given array and also of the elements in the array,so take a function and pass input array as argument and then function will find the max and sum of elements in the array and return it as object"
      );
      break;
    default:
      console.log("Invalid input");
      break;
  }
}
var k = prompt("Enter the number between 1 to 3");
describeFunction(k);
