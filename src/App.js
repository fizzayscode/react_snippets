import { useEffect, useState } from "react";
import Color from "./components/Color";
import Input from "./components/Input";
import Heading from "./components/Heading";
import { Routes, Route, Router, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Newpost from "./components/Newpost";
import Postpage from "./components/Postpage";
import About from "./components/About";
import Header from "./components/Header";
import Missing from "./components/Missing";
import Footer from "./components/Footer";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const Navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [post, setPost] = useState([
    {
      id: 1,
      title: "My First Post",
      date: "july 01,2021 11:17:36 AM",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate beatae dignissimos autem asperiores temporibus, cum veliteius qui consequatur sapiente officiis ullam. Soluta magni evenietreiciendis necessitatibus reprehenderit quia.",
    },
    {
      id: 2,
      title: "My Second Post",
      date: "july 01,2021 11:17:36 AM",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate beatae dignissimos autem asperiores temporibus, cum veliteius qui consequatur sapiente officiis ullam. Soluta magni evenietreiciendis necessitatibus reprehenderit quia.",
    },
    {
      id: 3,
      title: "My Third Post",
      date: "july 01,2021 11:17:36 AM",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate beatae dignissimos autem asperiores temporibus, cum veliteius qui consequatur sapiente officiis ullam. Soluta magni evenietreiciendis necessitatibus reprehenderit quia.",
    },
    {
      id: 4,
      title: "My Fourth Post",
      date: "july 01,2021 11:17:36 AM",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate beatae dignissimos autem asperiores temporibus, cum veliteius qui consequatur sapiente officiis ullam. Soluta magni evenietreiciendis necessitatibus reprehenderit quia.",
    },
    {
      id: 5,
      title: "My Fifth Post",
      date: "july 01,2021 11:17:36 AM",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cupiditate beatae dignissimos autem asperiores temporibus, cum veliteius qui consequatur sapiente officiis ullam. Soluta magni evenietreiciendis necessitatibus reprehenderit quia.",
    },
  ]);
  const customDate = new Date();

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the individual components of the date and time
  const year = customDate.getFullYear();
  const month = customDate.getMonth();
  const day = customDate.getDate();
  const hour = customDate.getHours();
  const minute = customDate.getMinutes();
  const second = customDate.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";
  const formattedDate = `${monthNames[month]} ${day}, ${year} ${hour}:${minute}:${second} ${ampm}`;
  const [both, setBoth] = useState({
    id: post.length + 1,
    title: "",
    body: "",
    date: formattedDate,
  });
  const handleDelete = (id) => {
    const newPost = post.filter((one) => {
      return one.id !== id;
    });
    setPost(newPost);
    Navigate("/");
  };

  const handleChange = (e) => {
    setBoth({ ...both, [e.target.name]: e.target.value });

    // console.log(both);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(both);
    setPost([...post, both]);
    setBoth("");
    Navigate("/");
  };

  useEffect(() => {
    console.log("triggered");
    const filteredResult = post.filter((each) => {
      return (
        each.body.toLowerCase().includes(search.toLowerCase()) ||
        each.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    console.log(filteredResult);
    setSearchResult(filteredResult.reverse());
  }, [post, search]);
  return (
    <div className="App">
      <Header
        title="my blog"
        search={search}
        post={post}
        setPost={setPost}
        setSearch={setSearch}
      />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home post={searchResult} />} />
          <Route
            path="/newpost"
            element={
              <Newpost
                setBoth={setBoth}
                both={both}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<Postpage post={post} handleDelete={handleDelete} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
          {/* <Color color={color} />
      <Input color={color} setColor={setColor} /> */}
          {/* <Heading /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
