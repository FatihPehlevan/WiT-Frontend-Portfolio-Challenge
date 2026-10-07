import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get('/details.json')
      .then((response) => setDetails(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="flex flex-col gap-3 lg:gap-8">
      <h2 className="text-3xl text-dark-heading font-inter font-semibold lg:text-5xl">
        Profile
      </h2>
      <div className="flex flex-col gap-2 lg:flex-row-reverse lg:justify-end lg:gap-24">
        <div className="flex flex-col gap-2 lg:gap-5">
          <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
            About Me
          </h3>
          <p className="lg:w-lg lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5">
          <h3 className="text-dark-subheading text-xl font-inter font-medium lg:text-3xl">
            Details
          </h3>
          <div>
            {details.map((detail) => (
              <div
                key={detail.id}
                className="grid grid-cols-2 lg:pb-2 lg:text-lg"
              >
                <span className="font-semibold">{detail.label}</span>
                <span className="lg:w-48">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
