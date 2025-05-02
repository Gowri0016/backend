import React, { useContext } from 'react';
import { DContext } from '../Datacontext/Datacontext';

export const Services = () => {
  const { service } = useContext(DContext);
  console.log("service", service);

  const limitedServices = service && service.length > 6 ? service.slice(0, 6) : service;

  const filteredServices =
    service && service[6] && service[6].choose && service[6].choose.length === 6
      ? service[6].choose.slice(0, 6)
      : service[6]?.choose;

  return (
    <>
      {/* Core Services Section */}
      <section className="relative z-10 top-20 py-16 bg-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 text-center mb-12">
          What We Do Best
        </h1>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {limitedServices && limitedServices.length > 0 ? (
            limitedServices.map((data, index) => (
              <div
                key={index}
                className="w-full sm:w-64 md:w-72 lg:w-1/4 bg-white text-center p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img src={data.image} alt="service-icon" className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{data.topic}</h3>
                <p className="text-gray-600 text-sm">{data.content}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">Our service list is loading...</div>
          )}
        </div>
      </section>

      {/* Choose Me Section */}
<section className="relative z-10 top-20 py-16 bg-white">
  <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 text-center mb-12">
    Why Choose Me
  </h1>
  <div className="flex flex-wrap justify-center gap-10 px-4">
    {limitedServices && limitedServices.length > 0 ? (
      limitedServices.map((data, index) => (
        <div
          key={index}
          className="w-full sm:w-64 md:w-72 lg:w-1/4 bg-white text-center p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
          <img
            src={data.image}
            alt="choose-icon"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {data.topic}
          </h3>
          <p className="text-gray-600 text-sm">{data.content}</p>
        </div>
      ))
    ) : (
      <div className="text-center text-gray-500">
        Loading reasons to choose me...
      </div>
    )}
  </div>
</section>

    </>
  );
};
