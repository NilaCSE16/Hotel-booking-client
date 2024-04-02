const AddRoom = () => {
  const handleAddRoom = () => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image1 = form.image1.value;
    const image2 = form.image2.value;
    const image3 = form.image3.value;
    const description = form.description.value;
    const person = form.person.value;
    const view = form.view.value;
    const size = form.size.value;
    const bed = form.bed.value;
    const video = form.video.value;
    const price = form.price.value;
    const room = {
      title,
      image1,
      image2,
      image3,
      description,
      person,
      view,
      size,
      bed,
      video,
      price,
    };
    // console.log(room);
    fetch("https://hotel-booking-server-tau.vercel.app/addRoom", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(room),
    }).then((data) => {
      if (data.insertedId) {
        alert("Successfully inserted a new room");
      }
      // console.log(data);
    });
  };
  return (
    <div className="w-full flex justify-center ">
      <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
        <form onSubmit={handleAddRoom} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Room Title</span>
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
              <span className="label-text">Image-1</span>
            </label>
            <input
              type="name"
              name="image1"
              placeholder="image1"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image-2</span>
            </label>
            <input
              type="name"
              placeholder="image2"
              name="image2"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image-3</span>
            </label>
            <input
              type="name"
              placeholder="image3"
              name="image3"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Room description"
              name="description"
            ></textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Maximum Number of Person</span>
            </label>
            <input
              type="number"
              placeholder="person"
              name="person"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">View</span>
            </label>
            <input
              type="name"
              name="view"
              placeholder="view"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Size</span>
            </label>
            <input
              type="name"
              name="size"
              placeholder="size"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Number of bed</span>
            </label>
            <input
              type="number"
              placeholder="bed"
              name="bed"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Video Link</span>
            </label>
            <input
              type="name"
              name="video"
              placeholder="Enter Video link"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price per night</span>
            </label>
            <input
              type="name"
              placeholder="price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#f5a8a3] hover:bg-[#f8c6c2] font-bold">
              Add a new room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoom;
