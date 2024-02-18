import TravelDetail from "./component/TravelDetail";
import Home from "./component/Home";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showTravelDetail, setShowTravelDetail] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleGenerateRoadMap = (destination, date) => {
    // Set the selected destination and date
    setSelectedDestination(destination);
    setSelectedDate(date);

    // Toggle between Home and TravelDetail components
    setShowTravelDetail(true);
  };

  const handleSubmit = (destination, date) => {
    if (destination == "") {
      toast.error("Please write Destination");
    } else if (date == "") {
      toast.error("please select Date");
    } else {
      console.log(date, "selectedDate");
      console.log(destination, "destination");
      handleGenerateRoadMap(destination, date);
    }
    // Pass destination and date to the onSubmit callback
  };

  return (
    <div>
      {showTravelDetail ? (
        <TravelDetail
          destination={selectedDestination}
          date={selectedDate}
          onSubmit={handleSubmit}
        />
      ) : (
        <Home onSubmit={handleGenerateRoadMap} />
      )}
    </div>
  );
}

export default App;
