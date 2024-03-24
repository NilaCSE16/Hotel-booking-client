import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Rooms = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://hotel-booking-api-eta.vercel.app/roomsCount")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.count);
        setCount(data.count);
      });
  }, []);

  // Calculate data slice for current page
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  // console.log("Pages: ", numberOfPages);

  const pages = [...Array(numberOfPages).keys()];
  // console.log("Pages: ", pages);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // You can fetch data for the new page from an API or perform any other action here
  };
  const handleChangePage = () => {
    // setCurrentPage(currentPage + 1);
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const [date, setDate] = useState(null);
  const handleChange = (newDate) => {
    setDate(newDate);
  };
  const [date1, setDate1] = useState(null);
  const [rooms, setRooms] = useState(null);
  // const [roomInfo, setRoomInfo] = useState(null);
  useEffect(() => {
    fetch(
      `https://hotel-booking-api-eta.vercel.app/rooms?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setRooms(data);
      });
  }, [currentPage, itemsPerPage]);
  return (
    <div className="flex mx-24 my-5 rounded-sm">
      <div className="bg-base-200 py-6">
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
        <div className="grid grid-cols-3 gap-8 pr-2 mx-3 py-5">
          {rooms?.map((room) => (
            <div key={room._id} className="card w-64 bg-base-100 shadow-xl">
              <figure className="">
                <Link to={`/rooms/${room._id}`}>
                  <img
                    src={room.image1}
                    alt="Room"
                    className="rounded-t-xl hover:scale-110"
                  />
                </Link>
              </figure>
              <div className="items-center text-center mt-4">
                <h2 className="text-center font-bold text-2xl font-serif">
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
          ))}
        </div>
        <div className="pagination w-full justify-center items-center flex mt-4">
          {/* <p>Current Page: {currentPage}</p> */}
          {/* <button onClick={handlePreviousPage}>Previous</button> */}
          {pages.map((page) => (
            <span
              key={page}
              className={`page-item ${page === currentPage ? "active" : ""}`}
            >
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={currentPage === page ? "btn selected" : "btn"}
                onChange={handleChangePage}
              >
                {page}
              </button>
            </span>
          ))}
          {/* <button onClick={handleNextPage}>Next</button> */}
        </div>
      </div>
      <div className="mx-10">
        <div className="border border-solid border-slate-200 p-5 mb-5">
          <h2 className="text-xl font-bold font-serif">Advanced Search</h2>
          <div>
            <ReactDatePicker
              onChange={handleChange}
              selected={date}
              placeholderText="Check In Date"
              name="date"
              className="input input-bordered w-full my-3"
            />
          </div>
          <div>
            <ReactDatePicker
              onChange={(newDate) => setDate1(newDate)}
              selected={date1}
              placeholderText="Check Out Date"
              name="date1"
              className="input input-bordered w-full my-3"
            />
          </div>
          <div className="w-full">
            <div className="mt-1">
              <select
                id="dropdown"
                name="dropdown"
                className="form-select cursor-pointer block w-full pl-3 pr-10 text-xl py-4 font-semibold border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Room Type</option>
                <option>Suite</option>
                <option>Family Room</option>
                <option>Luxury Room</option>
                <option>Classic Room</option>
                <option>Superior Room</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-4">
              <select
                id="dropdown"
                name="dropdown"
                className="form-select cursor-pointer block w-full pl-3 pr-10 text-xl py-4 font-semibold border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>0 Adult</option>
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>3 Adults</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <div className="mt-4">
              <select
                id="dropdown"
                name="dropdown"
                className="form-select cursor-pointer block w-full pl-3 pr-10 text-xl py-4 font-semibold border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>0 Children</option>
                <option>1 Children</option>
                <option>2 Children</option>
                <option>3 Children</option>
              </select>
            </div>
          </div>
          <div>
            <Link to={`/`}>
              <div className="w-full bg-[#f3928b] hover:bg-[#f5ada8] text-center bottom-0 p-3 mt-4 cursor-pointer">
                <button className="font-bold">Search</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="border border-solid border-slate-200 px-5 my-5">
          <div className="my-5">
            <h2 className="text-2xl font-serif mb-4">Star Ratings</h2>
            <div className="mb-2">
              <input type="checkbox" name="" id="" className="mr-4" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" id="" className="mr-4 p-4" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" id="" className="mr-4 p-4" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
            </div>
            <div className="mb-2">
              <input type="checkbox" name="" id="" className="mr-4 p-4" />
              <StarIcon className="text-[#f8958d]" />
              <StarIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
            </div>
            <div>
              <input type="checkbox" name="" id="" className="mr-4 p-4" />
              <StarIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
              <StarOutlineIcon className="text-[#f8958d]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
