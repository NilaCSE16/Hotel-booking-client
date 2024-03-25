import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const UpdateBookings = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { myBooking } = location.state;
  //   console.log(myBooking._id);
  // console.log(id);
  const [date, setDate] = useState(myBooking.date);
  const handleChange = (newDate) => {
    setDate(newDate);
  };

  const handleUpdateBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.email.value;
    // const roomId = form.roomId.value;
    const date = form.date.value;
    // console.log(date);
    // const update = { date };
    fetch(
      `https://hotel-booking-api-psi.vercel.app/bookings/${myBooking._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ date: date }),
      }
    )
      //   .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="w-full flex justify-center my-16">
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleUpdateBooking} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email:</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Room Id</span>
            </label>
            <input
              type="name"
              name="roomId"
              defaultValue={myBooking.roomId}
              className="input input-bordered"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <ReactDatePicker
              onChange={handleChange}
              selected={date}
              name="date"
              showIcon
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f5a8a3] hover:bg-[#f8c6c2] font-bold">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookings;
