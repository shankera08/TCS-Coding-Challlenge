Q1 - How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

A1 - I spent 10 hours although 6 hours were spent on debugging API invalid authorization key issue. I would include the other endpoints in the API to the test for more functionality for the user. Also, the web page is a bit slow due to the high volume of incoming data. Use pagination can improve performance.

Q2 What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A2 - I chose to write my code in JavaScript/React.js. I believe the most useful feature will be the release of Async/Await in the ES7 release which bring more clarity to the code when working with asynchronous JavaScript.

    Example:

    Using Promises:
    const getRestaurantList = () =>
    axios.get(`https://public.je-apis.com/restaurants?q=${outcode}`,config)
    .then(result => {
      console.log(result)
      return "done"
    })


    Using Async/Await
    const getRestaurantsList = async () => {
    console.log(await axios.get(`https://public.je-apis.com/restaurants?q=${outcode}`,config))
        return "done"
    }


Q3 How would you track down a performance issue in production? Have you ever had to do this?

A3 - We can use Chrome DevTools and audit the web page to get an understanding of the performance. I had to use this in my previous role to optimize the page load time.

Q4 How would you improve the Just Eat APIs that you just used?
A4 - I believe it would good to have a field to control the amount of data extracted per request to improve performance. 

Q5 Please describe yourself using JSON.

A5 -    const me = {
                    name: "Apurv Shanker",
                    location: {
                        city: "Toronto",
                        country: "Canada"
                    }
                    lastDegree: "Masters",
                    education: {
                        Graduate: "University of Michigan",
                        Undergraduate: "Lake Superior State University"
                    }
                }