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



