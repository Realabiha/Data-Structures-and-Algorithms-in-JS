// 插入排序
// 时间复杂度
// 空间复杂度
// 特点 最大限度利用现有顺序
const arr = [3,2,1,5,4,20,8]


// function insertSort(arr){
//     for(let i = 1; i < arr.length; i ++){
//         let temp = arr[i];
//         let j = i - 1;
//         while(j >= 0 && arr[j] > temp){
//             arr[j+1] = arr[j];
//             console.log(arr );
//             j --;
//         }
//         console.log(j+1)
//         arr[j+1] = temp;
//     }
//     console.log(arr);
//     return arr;
// }

function insertSort(arr){
    for(let i = 1; i < arr.length; i ++){
        const temp = arr[i];
        let j = i;
        for(; j > 0; j --){
            // 如果arr[i]之前的值都比arr[i]小，则不需要交换直接退出循环
            if(arr[j-1] < temp){
                break;
            }
            // arr[i] 比之前的值小，交互值
            else{
                arr[j] = arr[j-1];
            }
        }
        arr[j] = temp;
    }
    console.log(arr);
    return arr;
}

insertSort(arr);