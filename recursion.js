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

// function countDown(n) {
//   if (n === 0) return; // 🛑 Base case
//   console.log(n); // ✅ কাজ
//   countDown(n - 1); // 🔁 Recursive call
// }

// countDown(5);

// ❌ যদি আমরা condition না রাখতাম তাহলে কি হতো?

/* function countDown(n) {
  console.log(n);
  countDown(n - 1); // নিজেকে বারবার কল করছে, কোনো থামার শর্ত নেই
}
countDown(5); */

// ⚠️ তাহলে কী হতো?

// প্রথমে countDown(5) কল হতো → console: 5
// তারপর countDown(4) → console: 4
// এরপর 3, 2, 1, 0, -1, -2 ... এভাবে চলতেই থাকতো
// প্রতিবারই একটা নতুন execution context তৈরি হতো
// কোনো base case না থাকায় ফাংশন কখনো থামত না
// একসময় ব্রাউজারের call stack full হয়ে যেত
// এবং তখন RangeError: Maximum call stack size exceeded নামে একটা error দিতো

// current stack এ আমাদের ডাটা রিসার্ভ থাকে

// print n numbers using recursion

// function naturalNumbers(val) {
//   if (val === 0) return;
//   console.log(val);
//   naturalNumbers(val - 1); // ঠিকভাবে ১ করে কমে যাচ্ছে
// }
// naturalNumbers(10);

// মনে প্রশ্ন হতে পারে — val-- দিলে কী হতো?
// যেমন: naturalNumbers(val--);

// তাহলে সমস্যা হতো কারণ val-- মানে হচ্ছে:
// প্রথমে পুরোনো মানটাই পাঠাবে ফাংশনে, তারপর কমাবে

// ফলে recursion এ বারবার সেই পুরোনো মানটাই যাবে
// যেমন: 5, 5, 5, 5... মানে একেই বারবার পাঠাবে
// এতে করে base case কখনোই true হবে না
// এবং ফাংশন কখনো থামবে না 😓

// একসময় stack memory full হয়ে error (stack overflow) দিবে

// তাই আমাদের সবসময় লেখা উচিত:
// naturalNumbers(val - 1); // এটা পরিষ্কার ও নিরাপদ

// function naturalNumbers(val) {
//   if (val === 0) return;
//   console.log(val);
//   naturalNumbers(--val); // pre-decrement ব্যবহার করলাম
// }
// naturalNumbers(10);

// 🤔 এখন প্রশ্ন — pre-decrement (--val) দিলে এটা ঠিকভাবে কাজ করে কেন?

// ✅ কারণ:
// --val মানে হচ্ছে — আগে val এর মান ১ কমাও, তারপর সেই updated মানটা ফাংশনে পাঠাও

// যেমন: প্রথমে 10 দিলে => --val হবে 9, তারপর naturalNumbers(9) কল হবে
// আবার => --val হবে 8, তারপর naturalNumbers(8) কল হবে

// এইভাবে প্রতিবার নতুন ও কমে যাওয়া ভ্যালু পাঠানো হচ্ছে,
// ফলে recursion ধাপে ধাপে base case এ পৌঁছে যাচ্ছে এবং থেমে যাচ্ছে

// 📌 যেখানে post-decrement (val--) একই মান বারবার পাঠাত,
// সেখানে pre-decrement (--val) মান কমিয়ে পাঠাচ্ছে — that's why এটা কাজ করছে ✅

// ✅ Recursively 1 থেকে n পর্যন্ত সংখ্যা প্রিন্ট করা হচ্ছে

// function naturalNumbers(num) {
//   // 🛑 base case: যদি num 0 হয়, তাহলে ফাংশন আর কল করা হবে না
//   if (num === 0) return;

//   // 🔁 ফাংশন নিজেই নিজেকে কল করছে (recursion) কিন্তু আগেই করছে
//   // এর মানে হচ্ছে: সবগুলো call stack এ push হবে যতক্ষণ না base case মেলে
//   naturalNumbers(num - 1);

//   // 🟢 এখানে console.log হচ্ছে তখনই যখন stack থেকে function pop হচ্ছে
//   // অর্থাৎ, নিচ থেকে উপরের দিকে আসার সময় print হচ্ছে
//   console.log(num);
// }
// naturalNumbers(10);
