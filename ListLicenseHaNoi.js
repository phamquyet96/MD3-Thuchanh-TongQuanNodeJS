let checkLicensePlateHaNoi=(LicensePlate)=>{
    let arr=["29","30","31","33","40"];
    for(let i=0;i<arr.length;i++){
        if(LicensePlate.startsWith(arr[i])){
            return true;
        }
    }
    return false;
}
let listLicensePlate=["18H1-662.31","29P1-4816","30H1-442.80"];
let listLicensePlateHaNoi=[];
for(let i=0;i<listLicensePlate.length;i++){
    if(checkLicensePlateHaNoi(listLicensePlate[i])){
        listLicensePlateHaNoi.push(listLicensePlate[i]);
    }
}
console.log(listLicensePlateHaNoi)