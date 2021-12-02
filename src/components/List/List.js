import React, { useState, useEffect } from "react";
import BusService from "../../api/services";
import { formatTime } from "../../api/helper";

const List = ({ routeName }) => {
  const [timeData, setTimeData] = useState(null);
  const [direction, setDirection] = useState(0);

  // 1. get data
  useEffect(() => {
    if (routeName) {
      BusService.getEstimateTime(routeName)
        .then((data) => {
          setTimeData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [routeName]);

  // 2. set direciton
  const directionString = { 0: "去程", 1: "返程", 2: "迴圈", 255: "未知" };
  if (direction) {
    const status = direction;
    console.log(directionString);
  }

  return (
    <div>
      <h1>{routeName}</h1>
      <table>
        <thead>
          <tr>
            <th>預估到站時間</th>
            <th>站名</th>
          </tr>
        </thead>
        <tbody>
          {timeData &&
            timeData.map((stop) => (
              <tr>
                <td>{formatTime(stop.EstimateTime)}</td>
                <td>{stop.StopName.Zh_tw}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
