// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//8722174547
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//Approach:

function climbStairs(n) {
  if (n <= 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n >= 2) {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
}

//using memoization

function climb(n, memo = {}) {
  if (n <= 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (memo[n]) {
    return memo(n);
  }
  memo[n] = climb(n - 1, memo) + climb(n - 2, memo);
  return memo[n];
}

// swapping variables

function climber(n) {
  if (n <= 1) return 1;
  if (n == 2) return 2;

  let a = 1;
  let b = 2;
  let c;

  for (i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
