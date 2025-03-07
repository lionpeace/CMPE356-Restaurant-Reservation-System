import { useEffect, useState } from "react";
import Navigation from "../../../../Shared/Dashboard/Manager/NavigationManager.jsx";

import CurrencyWidget from "./CurrencyWidget.jsx";

const LiveUsersWidget = () => {
    const [liveUsers, setLiveUsers] = useState(0);
  
    useEffect(() => {
      const generateRandomUsers = () => {
        setLiveUsers(Math.floor(Math.random() * (150 - 15 + 1)) + 15);
      };
  
      generateRandomUsers();
      const interval = setInterval(generateRandomUsers, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="container mt-5 text-center">
            <div className="row">
                <div className="col">
                    <div className="card text-center shadow-sm">
                        <div className="card-body">
                        <h5 className="card-title card-title-live">
                            <span className="live-indicator"></span> Live Users
                        </h5>
                        <h3 className="text-danger fw-bold">{liveUsers}</h3>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
  };
  
  const styles = `
    .live-indicator {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      margin-right: 8px;
      animation: blink 1s infinite;
    }
    
    .card-title-live {
        font-size: 30px;
    }
  
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.2; }
      100% { opacity: 1; }
    }
  `;

  const StyleTag = () => <style>{styles}</style>;

function Home() {
    return (
        <>
            <Navigation />
            <div id="content">
                <h1 className="page-name">Welcome, Yiğit Avar</h1>
                <CurrencyWidget />
                <StyleTag/>
                <LiveUsersWidget/>
            </div>
        </>
    );
}

export default Home;