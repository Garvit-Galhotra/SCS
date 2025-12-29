# Local Storage

1. localStorage. clear() - to clean localStorage
2. localStorage. setItem ("key","value") - to add new item or overwrite existing ones
3. localStorage.getItem("key") - to get any item
4. localStorage. removeItem("key") - to remove any item

# Drawbacks

1. You can only get string value from the local storage, even if u give it any array or obj

- solution -> u need to stringfy the object or that array using
  let <Name of new obj> = JSON.stringfy(<Name of the object>)

and to get back the object or an array u need to use parse

let <Name of another new obj> = JSON.parse(<Name of the new object>)

`JSON. stringify : Array/object -> String`
`JSON.parse : String -> Array/object`

# Small Topics

1. fragments (<></>)

-> To make the code more structurize and to not have that many divs while we use `rafce`
