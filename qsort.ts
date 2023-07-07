const numbers = [7, 2, 13, 11, 19, 5, 4, 16, 10, 9, 3, 8, 15, 17, 1, 14, 20, 12, 6, 18];

const qsort = (arr:number[]):number[] =>{
    if(arr.length<2){
        return arr
    }else{
    const pivot = arr[Math.floor(Math.random()*arr.length)]
    const less = arr.filter(val=>val<pivot)
    const greater = arr.filter(val=>val>pivot)
    
    return [...qsort(less),pivot,...qsort(greater)]
    }
}

console.log(qsort(numbers))