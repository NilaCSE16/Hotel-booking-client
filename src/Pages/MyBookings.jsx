import UpdateIcon from "@mui/icons-material/Update";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  // console.log("Email: ", user?.email);
  const [myBookings, setMyBookings] = useState(null);
  useEffect(() => {
    fetch(
      `https://hotel-booking-server-tau.vercel.app/bookings?email=${user?.email}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
        // console.log(data);
      });
  }, [user?.email]);
  const [userName, setUsername] = useState(null);
  useEffect(() => {
    fetch(
      `https://hotel-booking-server-tau.vercel.app/users?email=${user?.email}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("Username: ", data[0].name);
        setUsername(data[0]?.name);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://hotel-booking-server-tau.vercel.app/bookings/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.deletedCount > 0) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your confirmed room has been deleted.",
                  icon: "success",
                });
                const remaining = myBookings.filter(
                  (booking) => booking._id !== id
                );
                setMyBookings(remaining);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your bookings room is not deleted :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto my-6">
      {userName ? (
        <h2 className="text-center font-bold text-2xl mb-6">
          {userName}'s Bookings
        </h2>
      ) : (
        ""
      )}
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            {/* <th>Name</th> */}
            <td>RoomId</td>
            <th>Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myBookings?.map((myBooking) => (
            <tr key={myBooking._id}>
              <td>{myBooking.roomId}</td>
              {/* <td>Cy Ganderton</td> */}
              {/* <td>Quality Control Specialist</td> */}
              <td>{myBooking.date}</td>
              <td className="cursor-pointer">
                <Link to="/updateBooking" state={{ myBooking: myBooking }}>
                  <UpdateIcon />
                </Link>
              </td>
              <td
                className="cursor-pointer"
                onClick={() => handleDelete(myBooking._id)}
              >
                <DeleteIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
