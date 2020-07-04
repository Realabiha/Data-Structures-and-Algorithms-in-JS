const data = [1,3,5,2,9,6];
for(let i = 0; i < data.length; i ++){
    for(let j = i + 1; j < data.length; j ++){
        let temp = data[i];
        if(data[i] > data[j]){
            data[i] = data[j];
            data[j] = temp;
        }
    }
}

//  0 1 2 3 4 5
// [1,2,3,5,6,9]
function binaryCheck(arr, target){
    const len = arr.length;
    const mid = Math.floor(len / 2);
    if(arr[mid] == target) {
        console.log(arr[mid])
        return true;
    }
    if(arr[mid] > target){
        binarySearch(arr.slice(0, mid), target);
    }
    if(arr[mid] < target){
        binarySearch(arr.splice(mid+1, len), target)
    }    
}
function violenceSearch(arr, target){
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] == target){
            console.log(arr[i]);
            return true;
        }
    }
}

function binarySearch(arr, target){
    // left/right 左右指针
    let left = 0, right = arr.length - 1;
    while(left <= right){
        let mid = Math.ceil((left + right) / 2)
        // 值相等返回当前索引
        if(arr[mid] == target){
            console.log(mid);
            return mid;
        }
        // 中间值大，移动右指针
        if(arr[mid] > target){
            right = mid - 1;
        }
        // 中间值小， 移动左指针
        if(arr[mid] < target){
            left = mid + 1;
        }
    }
    console.log(-1);
    return -1;
}

binarySearch(data, 10);