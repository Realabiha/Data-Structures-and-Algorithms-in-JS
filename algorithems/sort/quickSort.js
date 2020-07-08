// 快速排序
// 时间复杂度 
// 空间复杂度

const arr = [3,2,1,5,4,20,8]

// function quickSort(arr){
//     if(arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length / 2);
//     const target = arr.splice(mid, 1)[0];
//     let left = [], right = [];
//     for(let i = 0; i < arr.length; i ++){
//         arr[i] > target ? right.push(arr[i]) : left.push(arr[i]);
//     }
//     console.log(target, left, right);
//     return quickSort(left).concat([target], quickSort(right));
// }


// console.log(quickSort(arr));

function exchange(arr, i, j){
    const temp = arr[i];
    if(arr[i] > arr[j]){
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i ++){
//         for(let j = i + 1; j < arr.length; j ++){
//             exchange(arr, i, j);
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// bubbleSort(arr);

// function insertSort(){
//     for(let i = 1; i < arr.length; i ++){
//         const target = arr[i];
//         let j = i - 1;
//         // for(; j >= 0; j --){
//         //     if(arr[j] <= target) break; 
//         //     arr[j+1] = arr[j];
//         // }
//         // arr[j+1] = target;
//         while(j >= 0 && arr[j] > target){
//             arr[j+1]=arr[j];
//             j --;
//         }
//         arr[j+1]=target;
//     }
//     console.log(arr);
//     return arr;
// }
// insertSort(arr);

// function quickSort(arr){
//     if(arr.length <= 1) return arr;
//     const mid = Math.floor(arr.length/2);
//     const target = arr.splice(mid, 1);
//     let left = [], right = [];
//     for(let i = 0; i < arr.length; i ++){
//         arr[i] > target[0] ? right.push(arr[i]) : left.push(arr[i]);
//     }
//     console.log(target, left, right);
//     return quickSort(left).concat(target, quickSort(right));
// }
// console.log(quickSort(arr));

// function fbnx(n){
//     if(n == 1) return 1;
//     if(n == 2) return 2;
//     return fbnx(n-1)+fbnx(n-2);
// }
// console.log(fbnx(5));

// function binarySearch(arr, target){
//     let left = 0, right = arr.length - 1;
//     while(left <= right){
//         const mid = Math.floor((left+right) / 2);
//         if(arr[mid] === target) return mid;
//         if(arr[mid] > target){
//             right = mid -1;
//         }else{
//             left = mid + 1;
//         }
//     }
//     return -1;
// }
// console.log(binarySearch(quickSort(arr), 8));