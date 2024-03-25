import { useParams } from "react-router-dom";
// import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const Booking = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  // console.log(id);
  const [date, setDate] = useState(new Date());
  const handleChange = (newDate) => {
    const today = new Date();
    if (today > newDate) {
      alert("Set a valid Date");
    } else {
      setDate(newDate);
    }
  };

  const handleAddBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const roomId = form.roomId.value;
    const date = form.date.value;
    const room = { email, roomId, date };
    // console.log(room);
    fetch(
      `https://hotel-booking-api-psi.vercel.app/bookings?roomId=${roomId}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]?.roomId);
        if (data[0]?.roomId) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This room is already booked!!!!!",
            footer: '<a href="#">Try for another room</a>',
          });
        } else {
          fetch("https://hotel-booking-api-psi.vercel.app/addBookings", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(room),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Booking Confirmed.......",
                  showConfirmButton: false,
                });
              }
            });
        }
      });
  };
  return (
    <div className="w-full flex justify-center my-16">
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleAddBooking} className="card-body">
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
              defaultValue={id}
              className="input input-bordered"
              readOnly
            />
          </div>
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Maximum Number of Comments</span>
            </label>
            <input
              type="number"
              placeholder="comment"
              name="comment"
              className="input input-bordered"
              required
            />
          </div> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            {/* <DatePicker
              selected={startDate}
              name="date"
              className="input input-bordered w-full"
            /> */}
            <ReactDatePicker
              onChange={handleChange}
              selected={date}
              value={date}
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

export default Booking;
