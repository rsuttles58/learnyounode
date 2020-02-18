const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const http = require("http");

let get1 = new Promise(() => {
  http.get(url1, res => {
    res.setEncoding("utf8");
    let rawData = "";

    res.on("data", chunk => {
      rawData += chunk;
    });

    res.on("end", () => {
      return rawData + "\n" 
    });
  });
});

let get2 = new Promise(() => {
  http.get(url2, res => {
    res.setEncoding("utf8");
    let rawData2 = "";
    res.on("data", chunk => {
      rawData2 += chunk;
    });

    res.on("end", () => {
      return rawData2 + "\n"
    });
  });
});

let get3 = new Promise(() => {
  http.get(url3, res => {
    res.setEncoding("utf8");
    let rawData3 = "";
    res.on("data", chunk => {
      rawData3 += chunk;
    });

    res.on("end", () => {
      return rawData3
    });
  });
});

const getData = async () => {
  let data1 = await get1();
  let data2 = await get2();
  let data3 = await get3();

  console.log(data1, data2, data3);
};

getData();
