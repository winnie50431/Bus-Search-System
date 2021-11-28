import axios from "axios";
import { GetAuthorizationHeader } from "./auth";

class BusService {
  getNearby = async (coordinates) => {
    // /v2/Bus/Station/NearBy 取得指定[位置,範圍]的全臺公車站位資料
    const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/Station/NearBy?$top=30&$spatialFilter=nearby(${coordinates.lat},${coordinates.lng},150)&$format=JSON`;
    const options = {
      headers: GetAuthorizationHeader(),
    };
    try {
      const res = await axios.get(url, options);
      const data = res.data;
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  getStopOfRoute = async (routeName) => {
    //v2/Bus/DisplayStopOfRoute/City/{City}/{RouteName} 取得指定[縣市],[路線名稱]的市區公車顯示用路線站序資料
    const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/Taipei/${routeName}?$format=JSON`;
    const options = {
      headers: GetAuthorizationHeader(),
    };
    try {
      const res = await axios.get(url, options);
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  getEstimateTime = async (routeName) => {
    // 取得指定[縣市],[路線名稱]的公車預估到站資料
    const url = `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/Taipei/${routeName}?$select=StopID%2CStopName&$format=JSON`;
    const options = {
      headers: GetAuthorizationHeader(),
    };
    try {
      const res = await axios.get(url, options);
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default new BusService();
