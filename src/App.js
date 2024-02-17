import TravelDetail from "./component/TravelDetail";
import Home from "./component/Home";
import { useState } from "react";

function App() {
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleGenerateRoadMap = (destination, date) => {
    // Set the selected destination and date
    setSelectedDestination(destination);
    setSelectedDate(date);

    // Toggle between Home and TravelDetail components
    setShowTravelDetail(!showTravelDetail);
  };

  return (
    <div>
      {showTravelDetail ? (
        <TravelDetail destination={selectedDestination} date={selectedDate} />
      ) : (
        <Home onSubmit={handleGenerateRoadMap} />
      )}
    </div>
  );
}

export default App;
