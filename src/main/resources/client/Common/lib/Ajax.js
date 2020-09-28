export class Ajax {
  constructor() {}
  async sendAjaxGet(url) {
    console.log("GET-INPUT-DATA:" + url);
    let httpRequest = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log("GET-res: " + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };
      httpRequest.open("GET", url);
      httpRequest.send();
    });
  }

  async sendAjaxDelete(url) {
    console.log("DELETE-INPUT-DATA:" + url);
    let httpRequest = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log("DELETE-res: " + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };
      httpRequest.open("DELETE", url);
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send();
    });
  }

  async sendAjaxPut(url, data) {
    console.log("PUT-INPUT-DATA:", data);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log("PUT-res: " + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };
      httpRequest.open("Put", url, true);
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send(data);
    });
  }

  async sendAjaxPost(url, data) {
    console.log("POST-INPUT-DATA:", data);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log("POST-res:" + httpRequest.responseText);
          let obj = JSON.parse(httpRequest.responseText);
          resolve(obj);
        }
      };
      httpRequest.open("POST", url, true);
      httpRequest.setRequestHeader("Content-Type", "application/json");
      httpRequest.send(data);
    });
  }

  async sendAjaxPostFile(url, data) {
    console.log("POSTFILE-INPUT-DATA:" + data);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          // let obj = JSON.parse(httpRequest.responseText); //json 파싱하면 에러남?
          console.log("POSTFILE-res: " + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };

      httpRequest.open("POST", url, true);
      httpRequest.send(data);
    });
  }
}
