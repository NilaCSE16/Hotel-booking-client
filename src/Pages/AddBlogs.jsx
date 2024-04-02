import DatePicker from "react-datepicker";

const AddBlogs = () => {
  const startDate = new Date();
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const comment = form.comment.value;
    const date = form.date.value;
    const blog = { title, image, comment, date };
    // console.log(blog);
    fetch("https://hotel-booking-api-psi.vercel.app/addBlogs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then((data) => {
      if (data.insertedId) {
        alert("Successfully Inserted");
      }
    });
  };
  return (
    <div className="w-full flex justify-center my-16">
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleAddBlog} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blog Title</span>
            </label>
            <input
              type="name"
              name="title"
              placeholder="Room Type"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="name"
              name="image"
              placeholder="image"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DatePicker
              selected={startDate}
              name="date"
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f5a8a3] hover:bg-[#f8c6c2] font-bold">
              Add a new Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
