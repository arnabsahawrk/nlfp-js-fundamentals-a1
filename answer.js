//Question 1: Value Detective
function describeValue(value) {
  return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

//Question 2: Bangladesh Weekend Machine
function getDayType(day) {
  let d = day?.toLowerCase();

  switch (d) {
    case "friday":
    case "saturday":
      return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}

//Question 3: Username Gatekeeper
function validateUsername(username) {
  if (username.length < 4) return "Too Short";
  else if (username?.toLowerCase()?.includes(" ")) return "No Space Allowed";
  else if (username?.toLowerCase()?.includes("admin")) return "Reserved Word";
  else return "Available";
}

//Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let fare = 50;

  if (distance > 2) fare += (distance - 2) * 15;

  fare += waitingMinutes * 2;

  if (isNight) fare += fare * 0.2;

  return fare;
}

//Question 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;

  if (runsNeeded < 1) return "Won";
  else if (ballsLeft < 1) return "Lost";

  let requiredRate = (runsNeeded / ballsLeft) * 6;

  if (requiredRate <= 6) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
  else if (requiredRate <= 12) return `Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
  else return `Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
};
