import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
// import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useMemo } from "react";

export default function Home() {
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ], [])

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user/stats",
          {
            headers: {
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTAxOGIyOTE5YmU1MTY4OGMyZmJmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTc1MjcxMiwiZXhwIjoxNzA2MzU3NTEyfQ.Rqwgy2h_IVSaMNsqTi5dlt3VhUDHBQaPDC9H-uqfyd0"
            },
          });

        const statList = res.data.sort(function (a, b) {
          return a._id - b._id;
        })
        statList.map((item) => setUserStats(prev => [...prev,
        { name: MONTHS[item._id - 1], "New User": item.total }
        ]))

      } catch (error) {
        console.log(error)
      }
    };

    getUserStats()
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
