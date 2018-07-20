TCS Front End Test

Test details:

Just Eat has a public API available at https://public.je-apis.com/ that you can use to get restaurant information, including restaurant details and delivery information.

As an example, https://public.je-apis.com/restaurants?q=se19 returns a list of restaurants that deliver to the outcode SE19, including some basic restaurant information.

The API requires you specify a set of valid request headers:

Accept-Tenant: uk
Accept-Language: en-GB
Authorization: Basic VGVjaFRlc3RBUEk6dXNlcjI=
Host: public.je-apis.com
 

The task is to create an application that accepts an outcode as a parameter. The application should then display the following information about each restaurant that delivers to that outcode:

Name
Rating
Types of food for the restaurant
Platform Choice
You can create the application as a web application in any of the following platforms

    ·        JavaScript Native

    ·        ReactJS

    ·        Polymer

    ·        Angular

    ·        VueJS

 

Task requirements
Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.

Please complete the user story below.
Your code should compile and run in one step.
Feel free to use whatever frameworks / libraries / packages you like.
You must include tests
Please avoid including artifacts from your local build (such as NuGet packages or the bin folder(s)) in your final ZIP file
User Story
As a user running the application
I can view a list of restaurants in a user submitted outcode (e.g. SE19)
So that I know which restaurants are currently available

Acceptance criteria
For the known outcode se19, results are returned
The Name, Cuisine Types and Rating of the restaurant are displayed

Technical questions
Please answer the following questions in a markdown file called Answers to technical questions.md.

    How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
    What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
    How would you track down a performance issue in production? Have you ever had to do this?
    How would you improve the Just Eat APIs that you just used?
    Please describe yourself using JSON.
 