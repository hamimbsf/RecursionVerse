// 📚 Stack Memory — Concept in Bangla

// Stack একটি **LIFO (Last In, First Out)** ধরনের ডেটা স্ট্রাকচার। এর মানে হচ্ছে — যেটা **সর্বশেষে ঢোকে**, সেটা **সবার আগে বের হয়**।

// 🔼 Push Operation
// যখন আমরা Stack মেমোরিতে নতুন কোনো উপাদান **যোগ করি**, সেই কাজটিকে **Push** বলা হয়।

// 🔽 Pop Operation
// যখন আমরা Stack থেকে সর্বশেষ উপাদানটি সরিয়ে ফেলি, তখন সেটা Pop অপারেশন নামে পরিচিত।

// 👀 Peek Operation
// Stack-এর সর্বশেষে যোগ করা (সবার উপরের) উপাদানটি দেখতে চাইলে আমরা Peek অপারেশন ব্যবহার করি। এটা শুধু উপাদানটি দেখায়, কিন্তু সরায় না।

// Stack মেমোরিতে যতগুলো এলিমেন্ট থাকে, সেগুলো আসলে function call। এজন্য এই Stack-কে আমরা Call Stack বলি। Recursion-এর সময় প্রতিটি function call একটার পর একটা Stack-এ জমা হয়।

greet();

function greet() {
  console.log("hello");
  enjoy();
}
function enjoy() {
  console.log("enjoy");
  temp();
}
function temp() {
  console.log("do something");
}

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
