// 冒泡排序
// 时间复杂度 n*(n-1) O(n^2 - n)
// 空间复杂度 O(n + 1)
const arr = [3,1,0,6,4,5];
let count = 0;

// 默认升序
function bubbleSort(arr){
    // 思路一: 排列组合式两两比较

    // 1.i = 0开始与后续元素依次比较
    // 2.每轮比较会把未排序中的最小值移动到i位置
    // 3.重复1、2若干次

    // 外层循环控制每个元素都会参与比较
    // 内层循环控制当前比较元素比较次数

    // 时间复杂度 (n-1 + n-2 + ··· + 1) ~ O(n^2) 


    // for(let i = 0; i < arr.length; i ++){
    //     for(let j = i + 1; j < arr.length; j ++){
    //         count ++
    //         const temp = arr[i];
    //         if(arr[i] > arr[j]){
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    //     // 输出当前轮排序结果
    //     console.log(arr); 
    // }

    // let i = 0;
    // while(i < arr.length - 1){
    //     for(let j = i + 1; j < arr.length; j ++){
    //         count ++
    //         const temp = arr[i];
    //         if(arr[i] > arr[j]){
    //             arr[i] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    //     i ++;
    //     // 输出当前轮排序结果
    //     console.log(arr);
    // }

    // 思路二: 相邻元素两两比较

    // 1.j = 0开始与arr[j+1]相邻元素两两比较不满足则交换位置
    // 2.每轮比较会把未排序的最大值移动到length-i-1位置
    // 重复1、2若干次

    // 时间复杂度 (n-1 + n-2 + ··· + 1) ~ O(n^2)

    // let i = arr.length - 1;
    // while(i > 0){
    //     for(let j = 0; j < i; j ++){
    //         count ++
    //         const temp = arr[j+1];
    //         if(arr[j] > arr[j+1]){
    //             arr[j+1] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    //     i --;
    //     // 输出当前轮排序结果
    //     console.log(arr);
    // }

    // 相邻比较**优化**
    // 每一轮比较完成之后都会把当前未排序中的最大元素向右移动
    // 因此下一轮的比较排好序的元素不必要再做比较了

    // i -- 与 pos标记 对比
    // 在每一轮两两比较都不满足时(即发生交换)二者一样
    // pos标记只在发生交换时重新赋值(对一个部分有序的数组来说效率更高点)
    // 对于一个有序数组而言空间复杂度就是 O(n)

    // let i = arr.length - 1;
    // while(i > 0){
    //     // 如果[0,i)之间是有序的则退出while    
    //     let pos = -1;
    //     for(let j = 0; j < i; j ++){
    //         count ++;
    //         const temp = arr[j+1];
    //         if(arr[j] > arr[j+1]){
    //            arr[j+1] = arr[j];
    //            arr[j] = temp;
    //            pos = j;
    //            console.log(j, 'j')
    //        }
    //     }
    //     i = pos;
    //     console.log(arr);
    // }

    // 思路三: 双向冒泡(双指针)
    // [0,left) 和 (right,length-1]是排好序的
    // [left,right] 区间是未排序的

    let left = 0, right = arr.length - 1;
    while(left < right){
        for(let j = left; j < right; j ++){
            const temp = arr[j+1];
            if(arr[j] > arr[j+1]){
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
        right --;
        for(let j = right; j > left; j --){
            const temp = arr[j-1];
            if(arr[j] < arr[j-1]){
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
        left ++;
    }

    console.log(arr)
    return arr;
}
bubbleSort(arr);
