import React, { useEffect, useState } from "react";
import fetcher from "./../api/index";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/service`)
    //   .then((res) => setServices(res.data));

    (async () => {
      const res = await fetcher.get(`/service`);
      setServices(res.data);
    })();
  }, []);
  return (
    <div>
      <h2 className="text-center text-2xl mt-[200px]">
        Services : {services.length}
      </h2>
    </div>
  );
};

export default Services;
