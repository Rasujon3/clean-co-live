import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "./../../api/index";
import axios from "axios";

const AddService = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageURL,
    };
    const res = await fetcher.post("add-service", serviceData);
    // console.log(res);
    reset();
    setImageURL("");
  };

  const handleUploadImage = (event) => {
    setLoading(true);
    event.preventDefault();
    const image = event.target.files[0];

    const formData = new FormData();

    formData.set("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=0f72de4f776e48e1dbdd622246559a5c",
        formData
      )
      .then((res) => {
        // console.log(res);
        setImageURL(res.data.data.display_url);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex w-full h-screen bg-accent justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-2xl text-center">Add Service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">Service Name</span>
              </label>
              <input
                id="serviceName"
                type="text"
                placeholder="Service Name"
                class="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service Charge</span>
              </label>
              <input
                type="text"
                placeholder="Service Charge"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label
                htmlFor="image"
                class={
                  loading
                    ? "loading btn btn-primary mt-5"
                    : "btn btn-primary mt-5"
                }
              >
                Upload Image
              </label>
              <input
                id="image"
                type="file"
                placeholder="Service Charge"
                class="input input-bordered hidden"
                onChange={handleUploadImage}
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class={!imageURL ? "btn btn-disabled" : "btn btn-primary"}
                disabled={!imageURL ? true : false}
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
