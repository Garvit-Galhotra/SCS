# React Router DOM

# Browser Routing

1. Download is using` npm i react-router-dom`
2. in main.jsx import {BrowserRouter} from 'react-router-dom'
3. Wrap <App /> by BrowserRouter in main.jsx file
4. make Routes `Collection of all routes` `<Routes></ Routes>`
5. Inside of Routes make Route `<Route/>`
6. in Route mention path `Where to go` and element `What to render`

---

- So it should look like this
  <Routes>
  <Route path="/home" element={<Home />}/>
  </Routes>

---

# Some Features

1. Nested routes - made by writing in this way

path = "/product/men"

2. Dynamic routes

path = "/course/:id"

3. Dynamic nested routes
   you can access id by using use param hook

---

# Random Feature (Imp)

/:id

to get that id we use

const params = useParams()
console.log(params)
