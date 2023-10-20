/*
Promise API's 
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
// ---------------------------------
Suppose if we have to make parallel API calls and get the results 
Let suppose their are 10 userId's and you have to make the api call for 10 different users at the same time
Promise.all() -> it is used to handle multiple promises together [Fail Fast Technique]
it takes array of promises Promise.all([p1,p2,p3]) it will make 3 parallel API calls and get the result
It will return the array of results
Let suppose 
p1-> 3s
p2 -> 1s
p3 -> 2s
It will wait for all of them to finish ie after 3 seconds it will return the array
But as soon as any one API gets rejected Promise.all will throw an error
Let suppose p2 throws an error then immediately after 1s it will not wait for success or rejection of other promises 
Then what happened to these promises being created already that are not rejected yet as you say the other promises won't get executed if any of the above throws an error
[val1,val2,val3] val_i result of p_i [Assuming all the promises are resolved successfully]
// ------------------------------------------

// ------------------------------------------
If I want the result from the remaining API's which got success other than failure it is known as promise.allSettled([p1,p2,p3])
It will wait for all the promises to be settled and after 3 sec [val1,err2,val3]
// ------------------------------------------

// ------------------------------------------
Promise.race([p1,p2,p3]) it will give the result of promise which is finshed it's execution 1st
ie val2 -> result
Give the value of 1st settled promise
But if the first settled promise falis it will return the error from 1st settled promise 
it will not wait for other promises to get finished
// ----------------------------------------------

// ----------------------------------------------
Promise.any([p1,p2,p3])
Wait for 1st success
p1 3s success
p2 1s fail
p3 2s success
result -> val3
If all the promises failed the result will be an aggregated error [err1,err2,err3] all the errors
// ----------------------------------------------

 */