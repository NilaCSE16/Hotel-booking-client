import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import video from "../assets/videos/roomTour.mp4";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Map from "./Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";

const SingleRoom = () => {
  const { id } = useParams();
  // console.log("room info: ", id);
  const [roomInfo, setRoomInfo] = useState(null);
  useEffect(() => {
    fetch(`https://hotel-booking-server-tau.vercel.app/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRoomInfo(data[0]);
      });
  }, [id]);
  const [rooms, setRooms] = useState(null);
  // const [roomInfo, setRoomInfo] = useState(null);
  useEffect(() => {
    fetch("https://hotel-booking-server-tau.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRooms(data);
      });
  }, []);

  const [blogs, setBlogs] = useState(null);
  useEffect(() => {
    fetch("https://hotel-booking-server-tau.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="flex mx-28 my-10">
      {/* <h1>{roomInfo?.title}</h1> */}
      <div className="">
        <h2 className="text-4xl font-serif mb-4">{roomInfo?.title}</h2>
        <div className="carousel w-[95%] h-96">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={roomInfo?.image1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={roomInfo?.image2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={roomInfo?.image3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 text-slate-500">
          <p>{roomInfo?.description}</p>
          <div className="grid grid-cols-2 mt-10 mb-4">
            <p>Max: {roomInfo?.person} Persons</p>
            <p>View: {roomInfo?.view} </p>
          </div>
          <div className="grid grid-cols-2 mb-10">
            <p>
              Size: {roomInfo?.size} m<sup>2</sup>
            </p>
            <p>Bed: {roomInfo?.bed} </p>
          </div>
          <p className="mb-10">{roomInfo?.description}</p>
        </div>
        <div>
          <h2 className="text-4xl font-serif mb-4">Take a Tour</h2>
          <video className="max-w-full max-h-full pr-7" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* Review Section */}
        <div className="my-10">
          <h2 className="text-4xl font-serif mb-4">Review & Ratings</h2>
          <div className="mb-2">
            <input type="checkbox" name="" id="" className="mr-4" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <span className="ml-1 text-slate-500 mt-6"> 5 star ratings</span>
          </div>
          <div className="mb-2">
            <input type="checkbox" name="" id="" className="mr-4 p-4" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <span className="ml-1 text-slate-500 mt-6"> 4 star ratings</span>
          </div>
          <div className="mb-2">
            <input type="checkbox" name="" id="" className="mr-4 p-4" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <span className="ml-1 text-slate-500 mt-6"> 3 star ratings</span>
          </div>
          <div className="mb-2">
            <input type="checkbox" name="" id="" className="mr-4 p-4" />
            <StarIcon className="text-[#f8958d]" />
            <StarIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <span className="ml-1 text-slate-500 mt-6"> 2 star ratings</span>
          </div>
          <div>
            <input type="checkbox" name="" id="" className="mr-4 p-4" />
            <StarIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <StarOutlineIcon className="text-[#f8958d]" />
            <span className="ml-1 text-slate-500 mt-6"> 1 star ratings</span>
          </div>
        </div>

        {/* Featured Rooms */}
        <div className="my-10">
          <h2 className="text-4xl font-serif mb-4">Available Room</h2>
          <div className="grid grid-cols-2 gap-8 py-8">
            {rooms?.map(
              (room, index) =>
                index < 2 && (
                  <div
                    key={room._id}
                    className="card w-80 bg-base-100 shadow-xl"
                  >
                    <figure className="">
                      <Link to={`/rooms/${room._id}`}>
                        <img
                          src={room.image1}
                          alt="Shoes"
                          className="rounded-t-xl hover:scale-110"
                        />
                      </Link>
                    </figure>
                    <div className="items-center text-center mt-4">
                      <h2 className="text-center font-bold text-3xl">
                        {room.title}
                      </h2>
                      <p className="mt-3">
                        <span className="text-2xl font-bold text-black underline">
                          {room.price}
                        </span>{" "}
                        per night
                      </p>
                      <hr className="w-full my-6" />
                      <Link to={`/booking/${room._id}`}>
                        <div className="w-full bg-[#f3928b] hover:bg-[#f5ada8] bottom-0 p-4 rounded-b-xl cursor-pointer">
                          <button className="font-bold">
                            Book Now <ArrowRightAltIcon></ArrowRightAltIcon>
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      {/* right div */}
      <div>
        <div className="join">
          <input
            type="text"
            placeholder=""
            className="input input-bordered join-item w-80"
          />
          <button className="btn bg-[#f0c4c1] join-item">Search</button>
        </div>
        <Map></Map>
        <div className="my-10">
          <h2 className="text-2xl font-bold font-serif">Recent Blog</h2>
          {blogs?.map(
            (blog, index) =>
              index < 3 && (
                <div key={blog._id} className="mt-4 bg-base-200 rounded-md">
                  <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src={blog.image}
                        className="w-28 h-24 rounded-sm shadow-2xl"
                      />
                      <div>
                        <a
                          href="#"
                          className="font-bold hover:text-[#f38d86] font-serif"
                        >
                          {blog.title}
                        </a>
                        <div className="text-gray-600">
                          <CalendarMonthIcon style={{ fontSize: 16 }} />
                          <span className="mt-2 text-[13px] mx-1 mr-2">
                            {blog.date}
                          </span>
                          <PersonIcon style={{ fontSize: 16 }} />
                          <span className="mt-2 text-[13px] mx-1 mr-2">
                            Admin
                          </span>
                          <CommentIcon style={{ fontSize: 16 }} />
                          <span className="mt-2 text-[13px] mx-1 mr-2">
                            {blog.comment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold font-serif">Tag Cloud</h2>
          <div className="my-5">
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase mr-1">
              Dish
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Menu
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Food
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Sweet
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Tasty
            </button>{" "}
            <br />
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase mr-1">
              Delicious
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Desserts
            </button>
            <button className="border text-xs border-gray-400 hover:border-black rounded-md px-3 py-1 uppercase m-1">
              Drinks
            </button>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-2xl font-bold font-serif">Paragraph</h2>
          <p className="text-gray-600 my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            itaque, autem necessitatibus voluptate quod mollitia delectus aut,
            sunt placeat nam vero culpa sapiente consectetur similique,
            inventore eos fugit cupiditate numquam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
