// Why is recursion?

// 🔁 Loop দিয়ে ১ থেকে ৫ পর্যন্ত যোগফল (1 + 2 + 3 + 4 + 5) নির্ণয়:

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }
// console.log(sum); // Output: 15

// এখানে লুপ একে একে সব সংখ্যার উপর কাজ করে — ১ যোগ করে, তারপর ২, তারপর ৩... এভাবে সবশেষে ৫ পর্যন্ত পৌঁছে যায়।

// 🔄 কিন্তু Recursion এ ব্যাপারটা ভিন্ন —
// Recursion অনেকটা এমন একজন চালকের মতো, সে নিজে সব করে না,
// বরং সে বলে — “তুমি যদি ১ থেকে ৫ পর্যন্ত যোগফল চাও, তাহলে আগে ১ থেকে ৪ পর্যন্ত যোগফল দাও।”

// তখন ৪ বলবে — “আমাকে ১ থেকে ৩ পর্যন্ত দরকার”, তারপর ৩ বলবে — “আমাকে ১ থেকে ২ পর্যন্ত দরকার”,
// ২ বলবে — “আমাকে ১ থেকে ১ পর্যন্ত দরকার”, এবং ১ বলবে — “আমি তো জানিই, আমি ১!”

// তারপর সব রিটার্ন করে একে একে উপরে উঠে যাবে:
// ১ → ১ + ২ → ৩ + ৩ → ৬ + ৪ → ১০ + ৫ → ১৫

// 🔁 Recursion দিয়ে ১ থেকে n পর্যন্ত যোগফল বের করার ফাংশন

// function sumUpTo(n) {
//   if (n === 1) return 1; // 🟢 Base Case: n যদি ১ হয়, তাহলে রিটার্ন ১
//   return n + sumUpTo(n - 1); // 🔁 Recursive Step: নিজেকে ছোট ইনপুট দিয়ে আবার কল করে
// }

// console.log(sumUpTo(5)); // Output: 15

/*
sumUpTo(5)
└── 5 + sumUpTo(4)
    └── 4 + sumUpTo(3)
        └── 3 + sumUpTo(2)
            └── 2 + sumUpTo(1)
                └── 1  ← base case

Now returning...

2 + 1 = 3
3 + 3 = 6
4 + 6 = 10
5 + 10 = 15
*/

/* CALL STACK (During Execution):

| sumUpTo(1) | ← base case
| sumUpTo(2) |
| sumUpTo(3) |
| sumUpTo(4) |
| sumUpTo(5) | ← Top of stack

RETURNING BACKWARDS:

sumUpTo(1) → 1
sumUpTo(2) → 2 + 1 = 3
sumUpTo(3) → 3 + 3 = 6
sumUpTo(4) → 4 + 6 = 10
sumUpTo(5) → 5 + 10 = 15
 */

// 🔍 Deep Dive into Recursion

// 🔁 লুপে যেমন শুরু, শেষ ও ইনক্রিমেন্ট/ডিক্রিমেন্ট থাকে,
// ঠিক তেমনই Recursion-এও শুরু, থামার শর্ত (base case), এবং নিজেকে কল করার ধাপ থাকে।

// উদাহরণ দিয়ে বোঝা যাক:

// function hello(val) {
//   if (val === 0) return; // 🛑 Base Case: কখন রিকার্শন থামবে
//   console.log("hello"); // ✅ কাজ: যেটা আমরা প্রতিবার করতে চাই
//   hello(val - 1); // 🔁 Recursive Call: আগের অবস্থার দিকে এগোনো (val কমিয়ে)
// }

// hello(5); // 🔁 রিকার্শন শুরু

// 🔁 What is Recursion?

// **Recursion** (পুনরাবৃত্তি) হলো এমন একটি প্রোগ্রামিং কৌশল, যেখানে একটি ফাংশন নিজেকেই কল (call) করে কোনো সমস্যা সমাধান করে। এটি যতক্ষণ না একটি নির্দিষ্ট শর্ত (যাকে Base Case বলা হয়) পূরণ হয়, ততক্ষণ চলতে থাকে।

// ## 📘 সংজ্ঞা (Definition):

// > **Recursion** is a technique where a function solves a small part of the problem and then calls itself to solve the remaining part — until it reaches a base case.

// 👉 বাংলায়: **Recursion হলো এমন একটি ফাংশন যেটা নিজেকেই আবার কল করে যতক্ষণ না একটি নির্দিষ্ট থামার শর্ত (base case) পূরণ হয়।**

// 🔍 Recursion এর ৩টি মূল অংশ:

// 1. **Base Case (থামার শর্ত):**
//    যেখানে ফাংশন আর নিজেকে কল করবে না, অর্থাৎ রিকার্শনের শেষ সীমা।

// 2. **Recursive Call (নিজেকে কল করা):**
//    যেখানে ফাংশন নিজেকেই আবার কল করে পরবর্তী কাজের জন্য।

// 3. **Progress (প্রসেস এগিয়ে নেওয়া):**
//    প্রতি ধাপে ইনপুট এমনভাবে পরিবর্তন করতে হবে যাতে base case এর দিকে এগোয়।

//  🧠 উদাহরণ (Example):

function countDown(n) {
  if (n === 0) return; // 🛑 Base case
  console.log(n); // ✅ কাজ
  countDown(n - 1); // 🔁 Recursive call
}

countDown(5);
