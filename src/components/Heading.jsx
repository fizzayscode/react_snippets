import React, { useEffect, useState } from "react";

const Heading = () => {
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState("users");
  const [isloading, setIsLoading] = useState(true);
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const fetchData = async (selected) => {
    const response = await fetch(`${BASE_URL}/${selected}`);
    // console.log(`${BASE_URL}/${selected}`);
    const data = await response.json();
    console.log(data);
    // console.log(users[0].name);
    setIsLoading(false);
    setUsers(data);
    console.log(users);
  };

  useEffect(() => {
    if (selected !== null) {
      fetchData(selected);
    }
  }, [selected]);

  const handleClick = (id) => {
    setSelected(id);
    setIsLoading(true);
  };
  return (
    <>
      <div className="btns">
        <button onClick={() => handleClick("users")}>Users</button>
        <button onClick={() => handleClick("posts")}>Posts</button>
        <button onClick={() => handleClick("comments")}>Comments</button>
      </div>
      <div>
        {isloading ? (
          <h1>loading......</h1>
        ) : users ? (
          <>
            <h2>Data for ID {selected}:</h2>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            {/* <ul>
              {users.map((user) => {
                return <li>{user.name}</li>;
              })}
            </ul> */}
          </>
        ) : (
          <>
            <p>no data recieved</p>
          </>
        )}
      </div>
    </>
  );
};

export default Heading;
