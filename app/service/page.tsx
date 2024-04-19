import React from 'react'
import Courses from '../components/Courses/Courses'
import Banner from '../components/Banner/Banner';
import Table from '../components/Table/Table';
const service = () => {


    

  const featuresData = [
    {
      name: "Feature 1",
      description: "Description of Feature 1",
    },
    {
      name: "Feature 2",
      description: "Description of Feature 2",
    },
    // Add more features as needed
  ];


  return (
    <div>
       <div className="bg-white">
      <Banner/>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
         
          {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SERVICES EXCLUSIVELY FOR YOU</h2> */}
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {featuresData.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://reachwellworldwideexpress.co.in/images/service-cargo-bg.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://kaizenaire.com/wp-content/uploads/2024/01/best-international-courier-service-singapore-1024x585.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://unitedexpresssite.files.wordpress.com/2016/11/23.jpeg?w=700"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://www.qeedle.com/wp-content/uploads/2017/02/Courier-service.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
    {/* second part */}
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://reachwellworldwideexpress.co.in/images/about.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/379/352/small/delivery-van-driver-with-parcels-flat-character-courier-postman-deliveryman-holding-cardboard-boxes-and-order-receipt-isolated-cartoon-illustration-on-white-background-shipping-service-transport-vector.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSgI7sKH0u739XM8mlO26QPgyFXcaDZFHrqujuj3hPw&s"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0W7wPvVs-gWl2N6BlFDgnGCIIDRcu5fnS7bXcgosjXg&s"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SERVICES EXCLUSIVELY FOR YOU</h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {featuresData.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
        <Table/>
    </div>
      <Courses/>
    
      
    </div>
  )
}

export default service