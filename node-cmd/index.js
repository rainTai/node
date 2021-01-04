var nodeCmd = require("node-cmd");

function getNodeOptions() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      var key = nodeCmd.runSync(String(i) + "次机会");
      console.log(key);
    }, 1000);
  }
}
getNodeOptions();


