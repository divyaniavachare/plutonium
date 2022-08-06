const currentDate = new Date();
const batch = "Plutonium";

const problem2 = function () {
  console.log("Today Date: " + currentDate.getDate());
  console.log("Current Month: " + (currentDate.getMonth() + 1));
  console.log(
    "info: " + batch + ", W3D3,  the topic for today is Nodejs module system"
  );
};

module.exports.problem2 = problem2;
