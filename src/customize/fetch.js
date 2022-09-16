import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          let data = response && response.data ? response.data : [];
          //   convert date
          if (data && data.length > 0) {
            data.map((item) => {
              item.Date = moment(item.Date).format("DD/MM/YYYY");
              return item;
            });
            data = data.reverse(); //đảo ngược mảng
          }
          setData(data);
          setIsLoading(false);
          setIsErr(false);
        })
        .catch(() => {
          setIsErr(true);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]); // khi url thay đổi thì sẽ reset lại data

  //!   trả ra data
  return {
    data,
    isLoading,
    isErr,
  };
};

export default useFetch;
