# React + Vite using JAVASCRIPT ( HOW TO USE CONTEXT )

  

## Let's get Started

1. **SETUP THE FOLDERS OF CONTEXT**

    This is the file Structure

    ```cmd
        app
          -src
            -context
                -User
                  -UserContext.js
                  -UserProvider.jsx
            -pages
            -etc.
    ```

2. **CREATE CONTEXT USING CREATECONTEXT USING REACT**


   initialize a variable that using createContext function as value then import the variable

 3. **CREATE A PROVIDER**


     create a provider using the context you created earlier then you can apply useState for changing values 
     you can check the code in UserProvider.jsx file

   
4. **WRAP THE APP IN main.jsx USING THE PROVIDER THAT YOU CREATED**

    by wrapping the whole app using the provider so that you can able to use and access the context in your whole app
  
6. **GO TO THE PAGE WHERE YOU WANT TO USE THE CONTEXT VARIABLE**

    import the context and create a variable that has a value of useContext function from react and put the context that you import as its parameter value

7. **NOW YOU CAN USE IT !!**

   you can now use it and access the variable where you can change
   the value and still access the variable with the same changed value by the other pages(by using its useState you can change the value)








   
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

