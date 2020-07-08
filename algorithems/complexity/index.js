// for(let i = 1; i <= n; i ++){
//     console.log(i);
// }

// O(1+3n)=O(n)  ===>  n无限大




// 时间复杂度 时间增长趋势
// O(1) O(log(a)N) O(N) O(NlogN) O(N^2) O(N^3) O(N^k) 
// 常数阶 对数阶 线性阶 线性对数阶 平方阶 立方阶 k方阶

// O(1)
// let temp;
// let a = 1, b = 2;
// temp = a;
// a = b;
// b = temp;

// O(N)
// for(let i = 1; i <= n; i ++){
//     console.log(i);
// }

// O(log(2)N)
// let i = 1;
// while(i<n){
//     i *= 2
// }
// 1*2^k = n;

// O(Nlog(2)N)
// for(let i = 1; i <= name; i ++){
//     let x = 1;
//     while(x < n){
//         x *= 2;
//     }
// }

// O(n^2)
// for(let i = 1; i <= n; i ++){
//     for(letj = 1; j <= n; j ++){
//         console.log(j);
//     }
// }


// 空间复杂度 内存空间增长趋势
// O(1) O(N) O(n^2)

// O(1)
// let x = 1;
// x ++;

// O(N)
// let arr = new Array(n);
// for(let i = 1; i <= n; i ++){
//     arr[i] = 1;
// }

// O(N^2)
// let arr = new Array(n)
// for(let i = 1; i <= n; i ++){
//     arr[i] = new Array(n);
//     for(let j = 1; j <= n; j ++){
//         arr[i][j] = 1;
//     }
// }