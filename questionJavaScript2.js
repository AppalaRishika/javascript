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