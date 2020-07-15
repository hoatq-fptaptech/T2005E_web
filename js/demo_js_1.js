//console.log("Hello world!");
var x = 10;
console.log(x);
console.log(x+10);
x = "xin chao";
console.log(x);
console.log(x+10);
console.log("xin chao"+" t2005e");
console.log(x.length);
var y="a10";
//console.log(y+10);
y = parseInt(y);
console.log(y);// NaN -> not a number
if(isNaN(y)){
    console.log("Khong co gia tri");
}else{
    console.log(y+10);
}
for(var i=0;i<10;i++){
    console.log("i = "+i);
}

var ary = [];
ary[0] = 1999;
ary[1] = "hello";
ary[2] = [2,3,4,"xin chao",[3,5,7]];
console.log(ary[2][4][1]);
ary[2][4][3] = 55;
console.log(ary[2][4][3]);
ary[2][4][4] = ["a","b",5];

var s = [];
s[0]= 1;
s[1]= 2;
s[3] = 4;
for(var i=0;i<s.length;i++){
    console.log(s[i]);
}
var f = ham_gi_do();
console.log(f);
function ham_gi_do(a,b) {
    console.log("day la ben trong ham gi do:" + (a+b));
    return "xin chao";
}

s.map(function (e) {
    console.log("s: "+e);
});

var arr = [];
// for(var i=0;i<10;i++){
//     arr[i] = i*2+1;
// }
// // neu muon them 1 so nua
// arr[10] = 99;
for(var i=0;i<10;i++){
    arr.push(i*2+1);
}
arr.push(99);
arr.splice(1,2);// xoa tu vi tri 1 va xoa 2 phan tu
arr.map(function (e) {
    console.log("arr: "+e);
});