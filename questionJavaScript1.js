//1.

//Building pyramid using height by taking input
function buildPyramid1(num){
var specialCharacter='*';
    for (var i=0; i<num; i++){//loop for height
        for (var j=num-i; j>1; j--){//loop for number of spaces
            console.log("&nbsp");//prints space
        }
        for (var k=0; k<=i; k++ ){//loop for number of special character in a row
            console.log(specialCharacter+"&nbsp");//prints special character
        }
        console.log("<br>");  //prints next line
    }
}
//Building pyramid using height and special char as input
function buildPyramid2(height,specialChar){
    
        for (var i1=1; i1<=height; i1++){//loop for height
            for (var j1=1; j1<=height-i1; j1++){//loop for number of spaces
                console.log("&nbsp");//prints space
            }
            for (var k1=1; k1<=(i1); k1++ ){//loop for number of special character
                console.log(specialChar+"&nbsp");//prints special character
            }
            console.log("<br>");  //prints next line
        }
    }
buildPyramid1(5);
buildPyramid2(5,"@");

/*------------------------------------------------------------------------------------------------*/


// 2. 

//Generating random report card
function getReport(){
    let subject=['Maths','Physics','Chemistry'];//array for subjects
    let Marks=[];
    for(var index=0;index<3;index++){//loop for generating random marks into the marks array
        let al = Math.floor(Math.random()*100);
        Marks.push(al);//inserting values into marks array
        console.log(Marks[index]+"<br>");
    }
    let Status=[];
    for(var index=0;index<3;index++){
        if(Marks[index]<36){
            Status[index]='Fail';
        }
        else{
            Status[index]='Pass';
        }
    }
    let Report=[
        {
            subject:subject[0],
            Marks:Marks[0],
            Status:Status[0],
        },
        {
            subject:subject[1],
            Marks:Marks[1],
            Status:Status[1],
        },
        {
            subject:subject[2],
            Marks:Marks[2],
            Status:Status[2],
        },
    ];
    return Report;
    }
    
    let t=getReport();
    console.table(t);

    /*----------------------------------------------------------------------------------------------*/

    //3

    //Finding maximum and total sum of array

    function maxAndsum(a){
        let sum=0;
        var max=0;
        for (var index = 0; index < a.length; index++) {
            sum+=a[index];
        if(max<a[index]){
            max=a[index];
        }
        }
        return obj={
            max:max,
            sum:sum
        };
        }
        var input=[1,2,3,4,5];
        var k=maxAndsum(input);
        console.log("Max: "+k.max+"<br>");
        console.log("Sum: "+k.sum);

        
/*------------------------------------------------------------------------------------------------*/

//4

//description

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


  /*---------------------------------------------------------------------------------------*/
