const TimeAndLocation = ({
  weather: {formatedLocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex justify-center items-center my-6">
        <p className="text-xl font-extralight">
          {formatedLocalTime}
        </p>
      </div>
      <div className="flex justify-center items-center my-3">
        <p className="text-3xl font-medium">{name}, {country}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
