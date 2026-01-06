# Context API

1. Create a context
   export const UserDataContext = createContext();
2. wrap <App /> with that context in main.jsx file (UserContext.jsx)
3. use children in the context file and render the <App/>
4. in the Navbar file u can see we used useContext
   const data = useContext(UserDataContext);
   console.log(data);
   -> Here the data u passed in the userContext will come to that file
