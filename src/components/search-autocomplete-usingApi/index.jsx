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
