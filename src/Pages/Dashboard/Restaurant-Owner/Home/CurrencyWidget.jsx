import { useEffect, useState } from "react";

const CurrencyWidget = () => {
  const [rates, setRates] = useState({});
  const API_KEY = "e8aca69d0cbb4e5eacb9399e870e4dff";
  const API_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&symbols=TRY,USD,EUR,GBP`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRates(data.rates);
        } else {
          console.error("API Error:", data);
        }
      })
      .catch((err) => console.error("Exchange rate couldn't be fetched:", err));
  }, []);

  return (
    <div className="container mt-2">
      <h2 className="text-center text-danger mb-4">Exchange Rates</h2>
      <div className="row">
        {/* USD Card */}
        <div className="col-sm">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💵 US Dollar</h5>
              <h6 className="card-subtitle mb-2 text-muted">USD to TRY</h6>
              <p className="card-text text-danger fw-bold">
                {rates.USD ? (rates.TRY / rates.USD).toFixed(2) : "Loading..."} TRY
              </p>
            </div>
          </div>
        </div>

        {/* EUR Card */}
        <div className="col-sm">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💶 Euro</h5>
              <h6 className="card-subtitle mb-2 text-muted">EUR to TRY</h6>
              <p className="card-text text-danger fw-bold">
                {rates.EUR ? (rates.TRY / rates.EUR).toFixed(2) : "Loading..."} TRY
              </p>
            </div>
          </div>
        </div>

        {/* GBP Card */}
        <div className="col-sm">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">💷 British Pound</h5>
              <h6 className="card-subtitle mb-2 text-muted">GBP to TRY</h6>
              <p className="card-text text-danger fw-bold">
                {rates.GBP ? (rates.TRY / rates.GBP).toFixed(2) : "Loading..."} TRY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyWidget;
