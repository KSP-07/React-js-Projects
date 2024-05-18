import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers , setFilteredUsers] = useState([]);


 function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

          /*
          The given code snippet is a conditional statement in JavaScript that filters an array of user data based on a search query. Let's break it down step by step:

1. **Condition Check**:
   ```javascript
   users && users.length
   ```
   This part checks if the `users` array exists (is not null or undefined) and has a length greater than 0 (i.e., it is not empty). If both conditions are true, the expression will evaluate to `true`.

2. **Filtering the Array**:
   ```javascript
   ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
   ```
   If the condition is true, this part of the code is executed. It uses the `filter` method to create a new array containing only the elements that match the search query.

   - `users.filter((item) => ...)`: This method iterates over each element in the `users` array (referred to as `item` in the callback function).
   - `item.toLowerCase()`: Converts the current `item` (assumed to be a string) to lowercase. This ensures the search is case-insensitive.
   - `indexOf(query) > -1`: Checks if the `query` string is found within the `item`. The `indexOf` method returns the index of the first occurrence of the `query` in `item`, or -1 if it is not found. If the result is greater than -1, it means the `query` is present in the `item`.

3. **Result**:
   - If the `users` array exists and is not empty, the result of this expression is a filtered array of `users` where each user's name (or string representation) contains the `query` string, regardless of case.
   - If the `users` array does not exist or is empty, the condition evaluates to `false`, and nothing is done (in the context of this snippet, it might be part of a larger code block).

### Example
If `users` is `["Alice", "Bob", "Charlie"]` and `query` is `"al"`, the filtered result would be:
- `["Alice"]`

Here's a commented version for clarity:

```javascript
const filteredData =
  users && users.length // Check if users array exists and is not empty
    ? users.filter((item) => // If true, filter the array
        item.toLowerCase() // Convert each item to lowercase
          .indexOf(query) // Check if query is found in the item
        > -1 // Keep items where the query is found (index is greater than -1)
      )
    : []; // If users array is not defined or empty, return an empty array
```

In summary, this code snippet filters the `users` array to include only those items that contain the `query` string, case-insensitively.

*/
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function handleClick(event){
    console.log(event.target.innerText);
    setSearchParam(event.target.innerText);
    setShowDropDown(false);
    setFilteredUsers([])
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch(`https://dummyjson.com/users`);
      const data = await res.json();

    //   console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);




//   console.log(users, filteredUsers);



  if (loading)
    return (
      <div>
        <h2>Loading! Please wait.</h2>
      </div>
    );

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        name="search-users"
        placeholder="Search Users here..."
        onChange={handleChange}
      />
      {
        showDropDown && <Suggestions handleClick = {handleClick} data={filteredUsers}/>
      }
    </div>
  );
}
