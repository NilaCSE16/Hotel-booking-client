import { Parallax } from "react-scroll-parallax";
import banner from "../assets/images/banner.jpg";
import comment from "../assets/images/comment.jpg";
import profile from "../assets/images/profile.jpg";
import view from "../assets/images/view.jpg";
import PinchIcon from "@mui/icons-material/Pinch";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import SpaIcon from "@mui/icons-material/Spa";
// import ViewRooms from "./ViewRooms";
import { useEffect, useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import SingleRoom from "./SingleRoom";
import { Link } from "react-router-dom";

const Home = () => {
  const [rooms, setRooms] = useState(null);
  // const [roomInfo, setRoomInfo] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRooms(data);
      });
  }, []);

  // const handleSingleRoom = (id) => {
  //   // console.log(id);
  //   fetch(`http://localhost:5000/rooms/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRoomInfo(data);
  //       // console.log(data);
  //     });
  // };

  return (
    <div className="mb-10">
      {/* <hr className="bg-blue-400 w-full h-1" /> */}
      <div className="absolute">
        <img className="h-screen w-screen" src={banner} alt="" />
      </div>
      <div className="relative h-screen mb-10">
        <Parallax speed={15}>
          <div className="flex flex-col justify-center items-center md:h-[500px]">
            <div className="text-center text-white bg-gradient-to-r from-gray-700 to-transparent p-20 rounded-btn">
              <h1 className="text-5xl font-bold font-serif opacity-100">
                Luxury & Comfort
              </h1>
              <p className="text-xl">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.{" "}
                <br /> Maecenas sollicitudin est in libero pretium interdum.
              </p>
            </div>
          </div>
        </Parallax>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[80%] h-44 bg-[#f5a8a3] shadow-lg shadow-[#f0c4c1] rounded-sm flex flex-col justify-center items-center">
            <div className="join">
              <input
                type="text"
                placeholder=""
                className="input input-bordered join-item w-80"
              />
              <button className="btn bg-[#f0c4c1] join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-10 w-1 bg-blue-400 mx-4 mt-12 mb-6"></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-center ">
          <h1 className="text-4xl font-bold text-[#f38d86] font-serif opacity-100">
            Beach Hotel- More than a stay
          </h1>
          <p className="text-xl text-gray-600">
            In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
            rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.{" "}
            <br /> Maecenas sollicitudin est in libero pretium interdum.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 m-20">
        <div className="">
          <img src={comment} alt="" className="w-[550px] ml-8 h-80" />
        </div>
        <div>
          <h1 className="text-blue-400 text-7xl font-serif italic">“</h1>
          <div>
            <p className=" text-gray-600 text-xl italic mr-6">
              In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
              rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
              Maecenas sollicitudin est in libero pretium interdum. Nullam
              volutpat dui sem, ac congue purus hendrerit, id lobortis leo
              luctus nec.
            </p>
          </div>
          <div className="flex mt-8">
            <img src={profile} alt="" className="w-12 h-12 rounded-full" />
            <div className="ml-4 opacity-80">
              <h3 className="text-black font-bold">Michael Williams</h3>
              <p className="text-[#f17269] uppercase text-xs font-bold">
                CLIENT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-[#f5a8a3] px-20 pb-10">
          <div className="h-10 w-1 bg-blue-400 mb-6 mt-10"></div>
          <h1 className="text-5xl font-bold font-serif opacity-100">
            Deluxe Room
          </h1>
          <p className="text-gray-600 text-xl my-4">
            From <span className="text-3xl text-gray-800 font-bold">$190</span>/
            night
          </p>
          <hr className="bg-white rounded-btn w-full mb-4" />
          <div className="grid grid-cols-2 my-2 font-bold">
            <div>Bed:</div>
            <div>Double Bed</div>
          </div>
          <div className="grid grid-cols-2 my-2 font-bold">
            <div>Capacity:</div>
            <div>2 adults</div>
          </div>
          <div className="grid grid-cols-2 my-2 font-bold">
            <div>Room size:</div>
            <div>
              55m<sup>2</sup>
            </div>
          </div>
          <div className="grid grid-cols-2 my-2 font-bold">
            <div>View:</div>
            <div>Sea View</div>
          </div>
          <div className="grid grid-cols-2 my-2 font-bold">
            <div>Facilities:</div>
            <div>Iron, TV, Hair dryer</div>
          </div>
          <button className="btn font-bold mt-6 bg-[#f0c4c1] hover:bg-[#f0918a]">
            Book Now
          </button>
        </div>
        <img src={view} alt="" className="h-full w-full" />
      </div>
      <div className="grid grid-cols-4 gap-4 my-8">
        <div>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F7F3E8] flex items-center justify-center cursor-pointer">
              <PinchIcon className="text-[#f5a8a3]" style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className="py-4 text-center mx-16">
            <h3 className="font-bold font-sans text-2xl">24/7 Front Desk</h3>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F7F3E8] flex items-center justify-center cursor-pointer">
              <PointOfSaleIcon
                className="text-[#f5a8a3]"
                style={{ fontSize: 50 }}
              />
            </div>
          </div>
          <div className="py-4 text-center mx-16">
            <h3 className="font-bold font-sans text-2xl">Restaurant Bar</h3>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F7F3E8] flex items-center justify-center cursor-pointer">
              <MinorCrashIcon
                className="text-[#f5a8a3]"
                style={{ fontSize: 50 }}
              />
            </div>
          </div>
          <div className="py-4 text-center mx-16">
            <h3 className="font-bold font-sans text-2xl">Transfer Services</h3>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#F7F3E8] flex items-center justify-center cursor-pointer">
              <SpaIcon className="text-[#f5a8a3]" style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className="py-4 text-center mx-16">
            <h3 className="font-bold font-sans text-2xl">Spa Suites</h3>
            <p className="text-gray-600">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 py-10">
        <div className="flex w-full justify-center items-center">
          <div>
            <h1 className="text-4xl font-[arial] text-black">Our Rooms</h1>
            <div className="flex justify-center items-center mt-4">
              <div className="w-36 h-0.5 bg-blue-400"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-28 mt-1 h-0.5 bg-blue-400"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8 px-32 py-12">
          {rooms?.map(
            (room, index) =>
              index < 6 && (
                <div key={room._id} className="card w-80 bg-base-100 shadow-xl">
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
      <div className="mx-32 my-16">
        <div>
          <div className="h-10 w-1 bg-blue-400 mx-4 mt-12 mb-6"></div>
          <div className="">
            <h1 className="text-4xl mb-4 text-[#f38d86] font-serif opacity-100">
              Our Newsletter
            </h1>
            <div className="grid grid-cols-2">
              <p className=" text-gray-600 font-bold">
                In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus
                rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.
                Maecenas sollicitudin est in libero pretium interdum.
              </p>
              <div className="join pl-16">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="input input-bordered join-item w-80"
                />
                <button className="btn bg-[#f8a9a4] join-item">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex w-full h-full items-center justify-center">
          <div className="join">
            <input
              type="text"
              placeholder=""
              className="input input-bordered join-item w-80"
            />
            <button className="btn bg-[#f0c4c1] join-item">Subscribe</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
