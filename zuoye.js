
// 作业一
const user={name:"john",year:30};
var {name:name,year:age,isAdmin:isAdmin}=user;
console.log(name);
console.log(age);
console.log(isAdmin);


// 作业二
// for循环
function sumTo(n){
    // var n;
    var sum=0;
    for(var a=1;a<=n;a++){
      sum=sum+a;
    } 
    console.log(sum)
    return sum; 
}
sumTo(10);


// 递归
function sumTo2(n){
    if (n==1){
        return 1;
    }
    return n+sumTo(n-1);
}
console.log(sumTo(10));


// 求和公式
function sumTo3(n){
    let sum=0;
    sum=n*(n+1)/2;
    return sum;
}
console.log(sumTo(3))


// 作业三
function Accumulator(startingValue){

}




// 作业四（代码源自百度，但是，我仔细思考把他理解了的！！！注释是自己写的，可能有误）
function deepCopy(obj) {
    var result = Array.isArray(obj) ? [] : {}; //判断类型为数组还是对象
    for (var key in obj) {    //对obj中的内容进行处理，缺点是会把继承属性一起遍历
      if (obj.hasOwnProperty(key)) {  //判断obj中到底有没有嘞个属性
        if (typeof obj[key] === 'object' && obj[key]!==null) {   //判断那个属性的类型，如果依然是数组或数组就递归复制
          result[key] = deepCopy(obj[key]);   
        } else {
          result[key] = obj[key];//如果不是就直接复制
        }
      }
    }
    return result;
  }

