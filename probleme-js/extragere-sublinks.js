// currentURL = "/event/concert-vocalsimfonic-212/reserve-seats"
// -> "/event/concert-vocalsimfonic-212"

// Solutie: luam fiecare caracter pe rand din currentURL -> il introducem in result pana cand
// ajungem la al 3-lea slash ("/")

// --- VARIANTA UNU ---
const extractDetailsPageLink = (currentURL) => {
    // currentURL = "/event/concert-vocalsimfonic-212/reserve-seats"
    let result = "";
    let numberOfSlash = 0;
  
    for (let i = 0; i < currentURL.length; i++) {
      if (currentURL[i] === "/") {
        numberOfSlash++;
      }
      if (numberOfSlash < 3) {
        result += currentURL[i];
      }
    }
  
    return result;
  };
  
  // --- VARIANTA DOI ---
  const extractDetailsPageLink2 = (currentURL) => {
    let result = "";
    const lastIndexOfSlash = currentURL.lastIndexOf("/");
  
    for (let i = 0; i < lastIndexOfSlash; i++) {
      result += currentURL[i];
    }
  
    return result;
  };
  
  // --- VARIANTA TREI ---
  const extractDetailsPageLink3 = (currentURL) => {
    const lastIndexOfSlash = currentURL.lastIndexOf("/");
    const result = currentURL.substring(0, lastIndexOfSlash);
  
    return result;
  };
  
  console.log(
    extractDetailsPageLink3("/event/concert-vocalsimfonic-212/reserve-seats")
  );
  console.log(
    extractDetailsPageLink3("/event/techsylvania-2025-213/reserve-seats")
  );
  console.log(
    extractDetailsPageLink3("/event/my-bussiness-event-214/reserve-seats")
  );