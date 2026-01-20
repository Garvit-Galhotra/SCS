# Processing Server

1.  how to use the get in this
    - This is the code snippet for it
      app.get("/", (req,res)=>{
      res.send("Hello world");
      })

    `App is the instance of server`
    `.get is the method`
    `/ is the address which will go in the url`
    `req is the requst`
    `res is the response`
    `.send is the method for response to send the requested data `

2.  Nodemon and its use
    - This is a package which is used for not shutting down the server and then restarting it manually
    - So we automate this using nodemon

    -> How to install the nodemon - `npx nodemon`
    - What is the difference between npx and npm?

      `npm` installs and manages packages.

      `npx` runs packages (usually without installing them permanently).

3.  How to depoly a server?
