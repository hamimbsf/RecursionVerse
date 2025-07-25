// 🔰 Basics of Function in JavaScript

// 📚 Stack Memory — Concept in Bangla

// Stack একটি **LIFO (Last In, First Out)** ধরনের ডেটা স্ট্রাকচার। এর মানে হচ্ছে — যেটা **সর্বশেষে ঢোকে**, সেটা **সবার আগে বের হয়**।

// 🔼 Push Operation
// যখন আমরা Stack মেমোরিতে নতুন কোনো উপাদান **যোগ করি**, সেই কাজটিকে **Push** বলা হয়।

// 🔽 Pop Operation
// যখন আমরা Stack থেকে সর্বশেষ উপাদানটি সরিয়ে ফেলি, তখন সেটা Pop অপারেশন নামে পরিচিত।

// 👀 Peek Operation
// Stack-এর সর্বশেষে যোগ করা (সবার উপরের) উপাদানটি দেখতে চাইলে আমরা Peek অপারেশন ব্যবহার করি। এটা শুধু উপাদানটি দেখায়, কিন্তু সরায় না।

// Stack মেমোরিতে যতগুলো এলিমেন্ট থাকে, সেগুলো আসলে function call। এজন্য এই Stack-কে আমরা Call Stack বলি। Recursion-এর সময় প্রতিটি function call একটার পর একটা Stack-এ জমা হয়।

// greet();

// function greet() {
//   console.log("hello");
//   enjoy();
// }
// function enjoy() {
//   console.log("enjoy");
//   temp();
// }
// function temp() {
//   console.log("do something");
// }

// 🔄 Execution Steps with Call Stack:

// 1️⃣ greet() কল হয়
// greet() Stack-এ Push হয়

// এর পরে Console হয়: "hello"

// 2️⃣ enjoy() কল হয় greet() এর ভিতরে
// enjoy() Stack-এ Push হয়

// এর পরে Console হয়: "enjoy"

// 3️⃣ temp() কল হয় enjoy() এর ভিতরে
// temp() Stack-এ Push হয়

// এর পরে Console হয়: "do something"

// push হতে হতে সবার উপরে যেহেতু stack মেমোরি এর মধ্যে temp() ছিলো সেটা সবার আগে pop() হয় এরপর enjoy() তারপরে greet() pop() হয়ে stack মেমোরি খালি হয়

// 🧠 More About Stack Memory:

// Stack memory-তে শুধুমাত্র function নয়,
// বরং function-এর ভিতরের Execution Context এবং primitive values গুলোও store হয়।

// প্রত্যেকটি function call-এর জন্য Stack এ একটি আলাদা Execution Context তৈরি হয়,
// যেখানে সেই function-এর declaration, execution steps এবং scope সম্পর্কিত তথ্য থাকে।

// প্রতিটি ফাংশন call হলে Stack-এ একটি নতুন জায়গা তৈরি হয় (যাকে Execution Context বা Stack Frame বলা হয়),
// যেখানে function-এর execution পরিচালিত হয়।

// 🗂️ Heap Memory:
// Heap হচ্ছে প্রোগ্রামের জন্য বরাদ্দকৃত একটি বড় ও structure-less memory area,
// যেখানে reference type data (যেমন: object, array, function) store করা হয়।

// যখন তুমি কোনো object, array বা function তৈরি করো — JavaScript সেই reference type data গুলোকে Heap-এ রাখে।
// আর Stack থেকে শুধু সেই Heap-এর reference (pointer) store হয়।

// ✅ Note:
// function নিজে reference type হলেও,
// যখন কল করা হয় তখন তার Execution Context Stack-এ যায়,
// আর তার actual definition (যদি কোনো variable/const এ সংরক্ষিত থাকে) তখনও Heap-এ থাকে।
// 📘 What is return ? -->

// ✅ return এর মাধ্যমে আমরা একটি ফাংশন থামাতে পারি
// ✅ return দিয়ে চাইলে ফাংশনের বাইরে কোনো মান (value) পাঠানো যায়

// 📌 মূলত return এর দুটি কাজ:
// 1️⃣ ফাংশনকে ইমিডিয়েটলি বন্ধ (terminate) করা
// 2️⃣ কোনো মান (value) কে ফাংশনের বাইরে রিটার্ন করা

// ✨ উদাহরণ ১: শুধুমাত্র ফাংশন থামানো
function temp(val) {
  if (val === 0) return; // যদি val = 0 হয়, তাহলে ফাংশন এখানেই থেমে যাবে
  console.log("If the val is not 0 you can see this");
}

temp(0); // output: (কিছুই না, কারণ ফাংশন return দিয়ে থেমে গেছে)
temp(10); // output: If the val is not 0 you can see this

// ✨ উদাহরণ ২: ফাংশনের বাইরে মান পাঠানো (return value)
function square(num) {
  return num * num; // num এর ঘরফল (square) রিটার্ন করছে
}

const result = square(5);
console.log(result); // output: 25

// ✨ উদাহরণ ৩: return এর পরে আর কোনো কোড চলবে না
function demo() {
  return "Done";
  console.log("This will never run"); // এই লাইন এক্সিকিউটই হবে না
}

console.log(demo()); // output: Done

// ✨ উদাহরণ ৪: return না দিলে ফাংশনের default রিটার্ন ভ্যালু হয় undefined
function sayHi() {
  console.log("Hi there!");
}

const msg = sayHi(); // এখানে ফাংশন কিছু return করেনি
console.log(msg); // output: undefined
