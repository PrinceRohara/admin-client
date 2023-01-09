import axios from "axios";
import { useState, useEffect } from "react";

export const TaxData = () => {
  const [tax, setTaxData] = useState([]);
  const fetchApi = async () => {
    const response = axios.get("http://3.111.54.115:3000/api/backend/TaxList");
    setTaxData(response.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return tax;
};
