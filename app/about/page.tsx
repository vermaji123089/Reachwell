import React from "react";

const About = () => {
  const featuresData = [
    {
      name: "Cost Savings",
      description:
        "It is quality assured as well as Progressive and Diversified Company, focusing on Transportation with Ten corporate branches at important cities of the country.",
    },
    {
      name: "Secure Services",
      description:
        "We have extensive network, a strong fleet of vehicles and a committed team of people. ",
    },
    {
      name: "Cargo Express",
      description:
        "We were incorporated.Its networks in many fields transportation warehousing household packing, mining and movement. Reachwell Worldwide Express And Movers provides Packers and Packers, Packers and Movers, Movers and Packers, Packers Movers in Delhi, Gurgaon, Noida, NCR, Chandigrah, Mohali, Panchkula, Punjab, Bombay, Pune, Banglore, Hayderabad & India.",
    },
    {
      name: "Proven Experience",
      description:
        "These companies are just a call away; they have a list of an excellent packers and movers services in Delhi, Noida, Gurgaon, NCR, All Punjab & Rajasthan and in India. ",
    },
    // Add more features as needed
  ];

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-3 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ABOUT US
            </h2>
            <p className="mt-4 text-gray-500">
              Reachwell Worldwide Express (Regd.). As per the needs and demands
              of the Indian industry from time to time provided latest options.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {featuresData.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <div className="font-medium text-gray-900">
                    {feature.name}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CSsayWX5MpRNCeAw1Q3SygYTMb_8o86wt3qeY5g9UOXmve7Pz6Ym4-Vk7JgpxCz14q8&usqp=CAU"
          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
          className="rounded-lg bg-gray-100"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvDP8yVmyonX-V1oEwgVGYsqSVZ1aV2eRKyJi3FYRkSh8mUbq9J0zBVnUB7G9SxphDeEQ&usqp=CAU"
          alt="Top down view of walnut card tray with embedded magnets and card groove."
          className="rounded-lg bg-gray-100"
        />
            <img
              src="https://reachwellworldwideexpress.co.in/images/about-right-1.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://onro.io/wp-content/uploads/2021/10/What_is_courier_delivery.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default About;
