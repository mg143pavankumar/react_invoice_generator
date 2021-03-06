import React from "react";

const ClientDetails = ({ client }) => {
  return (
    <section className="mt-5">
      <h2 className="text-xl uppercase font-bold mb-1">{client.name}</h2>
      <p>{client.address}</p>
      <p>{client.phoneNumber}</p>
    </section>
  );
};

export default ClientDetails;
