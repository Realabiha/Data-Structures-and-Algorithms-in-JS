
export function sort(arr){
    // const arr = [2,9,3];
    // 冒泡排序
    for(let i = 0; i < arr.length - 1; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            if(arr[i] > arr[j]){
                // const temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    console.log(arr);
    return arr;
}
