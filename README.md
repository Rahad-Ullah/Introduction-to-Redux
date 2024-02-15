# React with Redux

Redux makes state management more easiar.

## রিডাক্স কেন প্রয়োজন?
আমরা যখন কোনো state একই সাথে একাধিক কম্পোনেন্ট এর মাঝে শেয়ার করতে চাই তখন ঐ state টিকে আমাদের কম্পোনেন্ট গুলোর parent কম্পোনেন্ট এর মধ্যে রাখতে হয়। তারপর state কে props আকারে child কম্পোনেন্টে পাঠাতে হয়। সেখান থেকে পরবর্তী child কম্পোনেন্টে অর্থাৎ inheritance আকারে যেটাকে বলা হয় Props Drilling. আমরা যখন এরকম অনেকগুলো কম্পোনেন্ট নিয়ে কাজ করবো তখন এই Props Drilling আমাদের জন্য বিরক্তকর হয়ে দাঁড়াবে। সেইসাথে সময় এবং শ্রম দুটোই বেশি লাগবে। এই Props Drilling থেকে রেহাই পেতে এবং state management কে সহজ করতে আমরা Redux ব্যবহার করব। 