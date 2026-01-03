# React Router DOM

---

- React - Builds SPA `Single Page Application` (URL Change hone pe Kuch ni hota tha!!)

---

# React Router Contains 2 things :-

1. React Router - Logic
2. React Router DOM

# Type of Router

1. BrowserRouter (Important)
   `Uses History API` `URL clean` `Mostly used in Modern Apps` `Good SEO`

   `While we intergrate react with the backend if we use the BrowserRouter it will try to find the index.js file only and only this file will work`

   `Needs Server Config` -> (index.js)

2. HashRouter
   `Contains #` -> /courses/#/about `Ugly URL`
   `Older Browser`
   `No SEO`

3. MemoryRouter
   `For React Native`

4. Static Router
   SSR `Server Side Rendering`

---

Routes - Container
Route - If URL(Path) is X Then Show Y

---

- Figure Out What this is...

"
style={({ isActive }) => ({
color: isActive ? "red" : "White",
})}"

---

# Nested Routes
