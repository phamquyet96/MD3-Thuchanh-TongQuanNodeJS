let arr=[2,4,556,6577,775,343,43];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max)