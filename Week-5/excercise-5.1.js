async function doTask1() {
  console.log('Task 1 started');
  await delay(1000); // simulates a 1 second delay
  console.log('Task 1 completed');
}
async function doTask2() {
  console.log('Task 2 started');
  await delay(2000); // simulates a 2 second delay
  console.log('Task 2 completed');
}
async function doTask3() {
  console.log('Task 3 started');
  await delay(3000); // simulates a 3 second delay
  console.log('Task 3 completed');
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// Async/Await version
async function executeAsyncTasks() {
  try {
      const result1 = await doTask1();
      const result2 = await doTask2();
      const result3 = await doTask3();
  } catch (error) {
      console.error(error);
  }
}
// Generator version
function* executeGeneratorTasks() {
  try {
      const result1 = yield doTask1();
      const result2 = yield doTask2();
      const result3 = yield doTask3();
  } catch (error) {
      console.error(error);
  }
}
executeAsyncTasks();
// let gen = executeGeneratorTasks();
// for(_ of gen){
// }