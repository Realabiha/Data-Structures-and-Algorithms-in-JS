// 冒泡排序
// 时间复杂度 n*(n-1) O(n^2 - n)
// 空间复杂度 O(n + 1)
const arr = [2,3,1,5,6,4,9]

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            const temp = arr[i];
            if(arr[i] > arr[j]){
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}
bubbleSort(arr);

