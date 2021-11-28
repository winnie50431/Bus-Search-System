import React, { useState, useEffect } from "react";
import BusService from "../../api/services";
import { formatTime } from "../../api/helper";

const List = ({ routeName }) => {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    if (routeName) {
      BusService.getEstimateTime(routeName)
        .then((data) => {
          setTimeData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [routeName]);

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
                {/* <td>{stop.EstimateTime}</td> */}
                <td>{global.helper.formatTime(stop.EstimateTime)}</td>
                <td>{stop.StopName.Zh_tw}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
