import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometerEmpty } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const TempAndDetails = ({weather:{
  details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like
},units}) => {
  const verticalList = [
    {
      id:1,
      Icon: FaThermometerEmpty,
      title: "Real Feel",
      value: `${feels_like.toFixed()}°`,
    },
    {
      id:2,
      Icon: BiSolidDropletHalf,
      title: "Humidity",
      value: `${humidity.toFixed()}%`,
    },
    {
      id:3,
      Icon: FiWind,
      title: "Wind",
      value: `${speed.toFixed()} ${units === "metric" ? "km/h":"m/s"}`,
    },
  ];
  const horizontalList = [
    {
      id:1,
      Icon: GiSunrise,
      title: "Sunrise",
      value: `${sunrise}`,
    },
    {
      id:2,
      Icon: GiSunset,
      title: "Sunset",
      value: `${sunset}`,
    },
    {
      id:3,
      Icon: MdKeyboardArrowUp,
      title: "High",
      value: `${temp_max.toFixed()}°`,
    },
    {
      id:4,
      Icon: MdKeyboardArrowDown,
      title: "Low",
      value: `${temp_min.toFixed()}°`,
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center text-xl text-cyan-300 py-6 ">
        {details}
      </div>
      <div className="flex items-center justify-between py-3">
        <img src={icon} className="w-20" alt="" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col items-start space-y-2">
          {verticalList.map(({ title, id, value, Icon }) => {
            return (
              <div key={id}>
                <div className="flex font-light text-sm items-center justify-center">
                  <Icon size={18} />
                  <p className="ml-1">
                    {title} :<span className="font-medium ml-1">{value}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 text-sm py-3">
        {horizontalList.map(({ title, id, value, Icon }) => {
          return (
            <div key={id}>
              <div className="flex items-center">
                <Icon size={30} />
                <p className="ml-1">
                  {title} :<span className="font-medium ml-1">{value}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TempAndDetails;
