import { timeoutTest, fetchTest } from "./test.js";

const app = {};

app.init = async () => {

     let fetchResult = await fetchTest();
     console.log(fetchResult)
     
    let result = await timeoutTest()
    console.log('result', result)

  
}

// Starter Applikation
app.init();