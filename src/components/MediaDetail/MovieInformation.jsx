import React from "react";

const MovieInformation = ({ data, type }) => {
  return (
    <div className="flex-1">
      <h1 className="py-4 text-[2.5vw] font-bold">Information</h1>
      <div className="pb-2 text-[2vw]">
        <h2 className="font-semibold">Original name:</h2>
        <p>{data.original_title || data.original_name}</p>
      </div>
      <div className="pb-2 text-[2vw]">
        <h2 className="font-semibold">Original Country:</h2>
        {(data.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`}
          />
        ))}
      </div>
      <div className="pb-2 text-[2vw]">
        <h2 className="font-semibold">Status:</h2>
        <p>{data.status}</p>
      </div>
      {type === "movie" ? (
        <div className="text-[2vw]">
          <h2 className="font-semibold">Revenue:</h2>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(data.revenue)}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="font-semibold">Networks:</h2>
          <p className="flex gap-3">
            {(data.networks || []).map((network) => (
              <img key={network.id}
                src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
              />
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieInformation;
