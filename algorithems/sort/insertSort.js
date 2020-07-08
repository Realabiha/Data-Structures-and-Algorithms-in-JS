// 插入排序
// 时间复杂度 O(N(N+1)/2) O(N^2)
// 空间复杂度 O(1)
// 特点 最大限度利用现有顺序
const arr = [3,2,1,5,4,20,8]


// function insertSort(arr){
//     for(let i = 1; i < arr.length; i ++){
//         let target = arr[i];
//         let j = i - 1;
//         while(j >= 0 && arr[j] > target){
//             arr[j+1] = arr[j];
//             console.log(arr );
//             j --;
//         }
//         arr[j+1] = target;
//     }
//     console.log(arr);
//     return arr;
// }

function insertSort(arr){
    for(let i = 1; i < arr.length; i ++){
        // 保存目标值
        const target = arr[i];
        let j = i - 1;
        for(; j >= 0; j --){
            // 如果arr[i]之前的值都比arr[i]小，则不需要交换直接退出循环
            if(arr[j] < target) break;
            // arr[i] 比之前的值小，交互值
            arr[j+1] = arr[j];
        }
        // j+1 位置插入目标值
        arr[j+1] = target;
    }
    console.log(arr);
    return arr;
}

insertSort(arr);