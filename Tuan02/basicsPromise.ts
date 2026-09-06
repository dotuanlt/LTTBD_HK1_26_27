// // Câu 1: Create a Promise that returns the string "Hello Async" after 2 seconds.[cite: 1]
// function helloAsync(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello Async");
//     }, 2000);
//   });
// }

// helloAsync().then((res) => console.log("Câu 1:", res));

// //Câu 2:  Write a function  that returns  a Promise  resolving  with  the number  10 after  1 second.
// function printNumber(): Promise<number> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(10);
//     }, 1000);
//   });
// }

// printNumber().then((res) => console.log("Câu 2:", res))

// //Câu 3: Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
// function printError(): Promise<never> {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Something went wrong"));
//     }, 1000);
//   });
// }

// printError().catch((err) => console.error("Câu 3:", err.message));

// //Câu 4: Use .then() and .catch() to handle a Promise that returns a random number.
// function cau4(): void {
//   const randomPromise = new Promise<number>((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//       resolve(num);
//     } else {
//       reject(new Error(`Số quá nhỏ: ${num.toFixed(2)}`));
//     }
//   });

//   randomPromise
//     .then((val) => {
//       console.log("Câu 4 - Success:", val);
//     })
//     .catch((err) => {
//       console.error("Câu 4 - Caught Error:", err.message);
//     });
// }

// cau4();

// //Câu 5: Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.
// function simulateTask(time: number): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Task done");
//     }, time);
//   });
// }

// simulateTask(5000).then((res) => console.log("Câu 5:", res));

// //Câu 6: Use Promise.all() to run 3 simulated Promises in parallel and print the result.
// function cau6(): void {
//   const p1 = simulateTask(1000);
//   const p2 = simulateTask(2000);
//   const p3 = simulateTask(3000);

//   Promise.all([p1, p2, p3]).then((results) => {
//     console.log("Câu 6: ", results);
//   });
// }

// cau6();

// //Câu 7: Use Promise.race() to return whichever Promise resolves first.
// function cau7(): void {

//   const p1 = new Promise((res) => setTimeout(() => res("Fast task (100ms)"), 100));
//   const p2 = new Promise((res) => setTimeout(() => res("Medium task (1000ms)"), 1000));
//   const p3 = new Promise((res) => setTimeout(() => res("Slow task (2000ms)"), 2000));

//   Promise.race([p1, p2, p3]).then((winner) => {
//     console.log("Câu 7 - Promise resolves first:", winner);
//   });
// }

// cau7();

// //Câu 8: Create a Promise chain: square the number 2, then double it, then add 5.
// function cau8(): void {
//   Promise.resolve(2)
//     .then((num) => {
//       return num * num;
//     })

//     .then((num) => {
//       return num * 2;
//     })

//     .then((num) => {
//       return num + 5;
//     })

//     .then((result) => {
//       console.log("Câu 8 - Result:", result);
//     });
// }

// cau8();

// //Câu 9: Write a Promise that reads an array after 1 second and filters even numbers.
// function cau9 (numbers: number[]): Promise<number[]> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const evens = numbers.filter((n) => n % 2 === 0);
//       resolve(evens);
//     }, 1000);
//   });
// }

// cau9([1, 2, 3, 4, 5, 6]).then((result) => console.log("Câu 9:", result));

// //Câu 10: Use .finally() to log "Done" when a Promise finishes (success or failure).
// function cau10(): void {
//   const samplePromise = new Promise((resolve) => {
//     setTimeout(() => resolve("Sample finished"), 1000);
//   });

//   samplePromise
//     .then((res) => console.log("Câu 10 - Result:", res))
//     .catch((err) => console.error("Câu 10 - Error:", err))
//     .finally(() => {
//       console.log("Câu 10 - Done");
//     });
// }
// cau10();

// //Câu 11: Convert Exercise 1 into async/await.
// async function cau11(): Promise<void> {
//   const result = await helloAsync();
//   console.log("Câu 11 - Output:", result);
// }

// cau11();

// //Câu 12: Write an async function that calls simulateTask(2000) and logs the result.
// async function cau12(): Promise<void> {
//   const result = await simulateTask(2000);
//   console.log("Câu 12 - Output: ", result);
// }
// cau12();

// //Câu 13: Handle errors using try/catch with async/await.
// async function cau13(): Promise<void> {
//   try {
//     await printError();
//   } catch (error: any) {
//     console.error("Câu 13 - Caught via try/catch:", error.message);
//   }
// }

// cau13();

// //Câu 14: Write an async function that takes a number, waits 1 second, and returns the number * 3.
// async function cau14(num: number): Promise<number> {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return num * 3;
// }

// cau14(13).then((res) => console.log("Câu 14 - Result: ", res));

// //Câu 15: Call multiple async functions sequentially using await.
// async function cau15(): Promise<void> {
//   console.log("Câu 15 - Sequential start: ");
//   const r1 = await simulateTask(1000);
//   console.log("Task 1 done:", r1);

//   const r2 = await simulateTask(2000);
//   console.log("Task 2 done:", r2);

//   const r3 = await simulateTask(3000);
//   console.log("Task 3 done:", r3);
// }

// cau15();

// //Câu 16: Call multiple async functions in parallel using Promise.all().
// async function cau16(): Promise<void> {
//   console.log("Câu 16 - Parallel start:");
//   const results = await Promise.all([
//     simulateTask(1000),
//     simulateTask(1000),
//     simulateTask(1000),
//   ]);

//   console.log("Câu 16 - All parallel finished:", results);
// }

// cau16();


// //Câu 17: Use for await...of to iterate over an array of Promises.
// async function cau17(): Promise<void> {
//   const promises = [
//     simulateTask(500).then(() => "Item 1 (500ms)"),
//     simulateTask(1000).then(() => "Item 2 (1000ms)"),
//     simulateTask(1500).then(() => "Item 3 (1500ms)"),
//   ];

//   for await (const item of promises) {
//     console.log("Câu 17 - Iterated item: ", item);
//   }
// }

// cau17();

// //Câu 18: Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).
// interface User {
//   id: number;
//   name: string;
//   phone: string;
//   address: string;
// }

// async function fetchUser(id: number): Promise<User> {
//   await new Promise((res) => setTimeout(res, 1000));
//   return {
//     id: id,
//     name: `User_${id}`,
//     phone: '0987654321',
//     address: 'Go Vap, Tp.HCM'
//   };
// }

// fetchUser(1).then((res) => console.log("Câu 18:", res));

// //Câu 19: Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
// async function fetchUsers(ids: number[]): Promise<User[]> {
//   const userPromises = ids.map((id) => fetchUser(id));
//   const users = await Promise.all(userPromises);

//   return users;
// }

// fetchUsers([1, 2, 3, 4, 5]).then((res) => console.log("Câu 19:", res));

// //Câu 20: Add a timeout: if the API call takes more than 2 seconds, throw an error.
// async function cau20(): Promise<void> {
//   const slowApiCall = new Promise((res) => setTimeout(() => res("API Data"), 3000));

//   const timeoutPromise = new Promise((_, rej) =>
//     setTimeout(() => rej(new Error("Timeout: API called more 2 seconds")), 2000)
//   );

//   try {
//     const data = await Promise.race([slowApiCall, timeoutPromise]);
//     console.log("Câu 20 - Result: ", data);
//   } catch (error: any) {
//     console.error("Câu 20 - Error: ", error.message);
//   }
// }

// cau20();

//Câu 21: Use fetch to get data from a public API (e.g., https://jsonplaceholder.typicode.com/todos/1).
async function cau21(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await response.json();

  console.log("Câu 21 - Todo Data:", data);
}

cau21();

//Câu 22: Call the API multiple times and log the results.
async function cau22(): Promise<void> {
  //Khởi tạo danh sách URL cần gọi
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/5",
  ];

  //Gửi request đồng thời cho cả 5 URL bằng Promise.all và map()
  const results = await Promise.all(
    urls.map((url) => fetch(url).then((res) => res.json()))
  );
  //In toàn bộ mảng kết quả API lấy về được
  console.log("Câu 22 - Multiple Results:", results);
}

cau22();

//Câu 23: Write an async function that fetches a list of todos and filters out those that are not completed.
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function cau23(): Promise<Todo[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //Parse toàn bộ dữ liệu trả về thành mảng đối tượng Todo
  const todos: Todo[] = await response.json();

  //Dùng filter loại bỏ các phần tử có completed === false, chỉ giữ lại item hoàn thành
  return todos.filter((todo) => todo.completed === true);
}

cau23().then((res) => console.log("Câu 23 - Total completed: ", res.length));

//Câu 24: Write an async function postData() that sends a POST request to a test API.
async function postData(): Promise<void> {
  //Gửi một request với method POST đến API
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //Thiết lập header thông báo định dạng dữ liệu gửi lên là JSON
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    //Chuyển đối tượng JavaScript thành chuỗi JSON ở thuộc tính body
    body: JSON.stringify({
      title: "Bài viết kiểm thử",
      body: "Nội dung kiểm thử",
      userId: 1,
    }),
  });

  //Nhận dữ liệu từ server
  const data = await response.json();

  //In kết quả
  console.log("Câu 24 - POST Response:", data);
}

postData();

//Câu 25: Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.
async function downloadFile(fileName: string): Promise<void> {
  //Thông báo bắt đầu quá trình tải file
  console.log(`Câu 25 - Đang tải tệp: ${fileName}...`);
  //Mô phỏng thời gian tải là 3 giây
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //In thông báo tải thành công
  console.log(`Câu 25 - Tải tệp ${fileName} thành công.`);
}

downloadFile("baitapReact.pdf");

//Câu 26: Use async/await with setTimeout to simulate a 5-second wait.
async function cau26(): Promise<void> {
  //Thông báo bắt đầu đếm thời gian
  console.log("Câu 26 - Bắt đầu chờ 5 giây...");

  await new Promise((resolve) => setTimeout(resolve, 5000));

  //In thông báo kết thúc
  console.log("Câu 26 - Đã chờ xong 5 giây.");
}

cau26();