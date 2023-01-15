# Flipkart-Product-Listing
This is a prototype of an flipkart product listing page, built using React, a JavaScript library for building user interfaces. The website has been designed to be responsive, meaning it adapts to different screen sizes and devices, and uses Tailwind CSS, a utility-first CSS framework to style the website.


![screencapture-127-0-0-1-5173-2023-01-15-22_14_35](https://user-images.githubusercontent.com/83115094/212554170-fe38a431-2c60-48ad-bc88-979e9f87fc1a.png)



## Features
1. Created a feature to sort products from price High-to-Low and Low-to-High price.
2. Creates Filters based on:
    - Size(S, M, L, XL,XXL)
    - Ideal for (Men, Women)
    - Feature to clear all filters.
    
    

## Approach

The approach for this was to utilize the React Context API for efficient and dynamic state management and to create reusable and dynamic components.

First, I implemented the Context API to handle the fetching of JSON data and all the main logic of the application such as fetching the data from JSON file and applying the filters. This allows for centralization of the state management and makes the code more organized and easy to understand.

Next, I created various components such as the product component, which renders a list of products, and the filter component, which allows the user to filter the products based on their preferences. These components are designed to be reusable and dynamic, meaning they can be used in different parts of the application with different props passed in to create different functionality.

In the product component, I am calling the product list and passing the data to it which is coming from the context api. In the filter component, I am taking the user input and sending it to the context API to handle all the logic of applying the filters. This makes the code more efficient and easy to maintain.

Additionally, I have made sure that the website is responsive and have used Tailwind CSS, a utility-first CSS framework to style the website. This ensures that the website looks good on different screen sizes and devices.

Overall, the approach of using React Context API for state management and creating dynamic and reusable components allows for efficient and easy to maintain code, and the responsive design and use of Tailwind CSS ensures a good user experience.

