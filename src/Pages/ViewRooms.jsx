import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
const ViewRooms = ({ room, handleSingleRoom }) => {
  const { _id, image1, title, price } = room;
  //   const { roomInfo } = handleSingleRoom;
  // console.log(roomInfo);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="">
        <img src={image1} alt="Shoes" className="rounded-t-xl" />
      </figure>
      <div className="items-center text-center mt-4">
        <h2 className="text-center font-bold text-3xl">{title}</h2>
        <p className="mt-3">
          <span className="text-2xl font-bold text-black underline">
            {price}
          </span>{" "}
          per night
        </p>
        <hr className="w-full my-6" />
        <div className="w-full bg-[#f5a8a3] bottom-0 p-4 rounded-b-xl cursor-pointer">
          <Link to="/singleRoom" state={{}}>
            <button className="font-bold" onClick={() => handleSingleRoom(_id)}>
              View Room Details <ArrowRightAltIcon></ArrowRightAltIcon>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewRooms;
