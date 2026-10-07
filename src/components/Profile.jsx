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
    <section className="flex flex-col gap-3">
      <h2 className="text-3xl text-dark-heading">Profile</h2>
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex flex-col gap-2">
          <h3 className="text-dark-subheading text-xl">About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. <br /> <br />
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-dark-subheading text-xl">Details</h3>
          <div>
            {details.map((detail) => (
              <div key={detail.id} className="grid grid-cols-2">
                <span>{detail.label}</span>
                <span>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
