import React from "react";
import ProfileCard from "./components/card";

const users = [
  {
    id: 1,
    name: "John Doe",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    cover: "https://picsum.photos/id/1015/400/200",
    isFollowing: true,
  },
  {
    id: 2,
    name: "Rock Smith",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    cover: "https://picsum.photos/id/1011/400/200",
    isFollowing: false,
  },
  {
    id: 3,
    name: "Joy William",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    cover: "https://picsum.photos/id/1016/400/200",
    isFollowing: false,
  },
  {
    id: 4,
    name: "Johnson Smith",
    country: "New York",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    cover: "https://picsum.photos/id/1018/400/200",
    isFollowing: false,
  },
  {
    id: 5,
    name: "Kharmundu John",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    cover: "https://picsum.photos/id/1020/400/200",
    isFollowing: false,
  },
  {
    id: 6,
    name: "John bnega Don",
    country: "Canada",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    cover: "https://picsum.photos/id/1021/400/200",
    isFollowing: true,
  },
  {
    id: 7,
    name: "Luchhi William",
    country: "Australia",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    cover: "https://picsum.photos/id/1022/400/200",
    isFollowing: false,
  },
  {
    id: 8,
    name: "Alex Smith",
    country: "New York",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    cover: "https://picsum.photos/id/1023/400/200",
    isFollowing: true,
  },
  {
    id: 9,
    name: "Luchha Doe",
    country: "India",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    cover: "https://picsum.photos/id/1024/400/200",
    isFollowing: false,
  },
 
   {
    id: 10,
    name: "Shubham pandat",
    country: "India",
    image: "https://imgs.search.brave.com/awyZPWxHDxCFIDdzpPgWtvxQJIeBYy_qtGIEOhx3hjs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTE4/MjkwNjkvc3RvY2st/cGhvdG8tY29tbW9u/LWxhbmd1ci1tb25r/ZXktaW4taW5kaWE",
    cover: "https://img.magnific.com/free-photo/aerial-view-small-village-country-roadside_1150-2364.jpg?semt=ais_hybrid&w=740&q=80",
    isFollowing: false,
  },
];

const App = () => {
  return (
    <div className="parent"> 
    {users.map(function (user) {
    return <ProfileCard name ={user.name} 
     country = { user.country} image = {user.image} cover = {user.cover}  isFollowing = {user.isFollowing}
    
    
    
    
    />
    })}
    
    </div>
  )
}

export default App