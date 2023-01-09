let arr=[
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];
let maleSum=0;
let countMale=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].gender==="male"){
        maleSum+=arr[i].point;
        countMale++;
    }
}
console.log("Diem trung binh cac ban nam: "+(maleSum/countMale));


let femaleSum=0;
let countFemale=0;
for(let i=0;i<arr.length;i++){
    if(arr[i].gender==="female"){
        femaleSum+=arr[i].point;
        countFemale++;
    }
}
console.log("Diem trung binh cac ban nu: "+(femaleSum/countFemale));