//여러장의 이미지 업로드
function uploadImgPreview() {
  // @breif 업로드 파일 읽기
  let fileList = document.getElementById("js-upload").files;
  // @breif 업로드 파일 읽기
  function readAndPreview(fileList) {
    // @breif 이미지 확장자 검사
    if (/\.(jpe?g|png|gif)$/i.test(fileList.name)) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          let image = new Image();
          image.width = "264";
          image.height = "264";
          image.title = fileList.name;
          image.src = this.result;
          // @details 이미지 확장자 검사
          document.getElementById("js-thumnail").appendChild(image);
        },
        false
      );

      // @details readAsDataURL( )을 통해 파일의 URL을 읽어온다.

      if (fileList) {
        reader.readAsDataURL(fileList);
      }
    }
  }

  if (fileList) {
    [].forEach.call(fileList, readAndPreview);
  }
}
onChange = "uploadProfile()";

function uploadReviewImg() {
  let fileList = document.getElementById("js-upload-profile").files;
  var thumnail = document.getElementById("js-thumnail");
  function readAndPreview(fileList) {
    if (/\.(jpe?g|png|gif)$/i.test(fileList.name)) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          let image = new Image();
          if (
            thumnail.innerHTML !== null ||
            thumnail.innerHTML !== "undefined"
          ) {
            thumnail.innerHTML = "";
          }

          image.width = "100";
          image.height = "100";
          image.title = fileList.name;
          image.src = this.result;
          thumnail.appendChild(image);
        },
        false
      );

      if (fileList) {
        reader.readAsDataURL(fileList);
      }
    }
  }

  if (fileList) {
    [].forEach.call(fileList, readAndPreview);
  }
}

function uploadProfile() {
  let fileList = document.getElementById("js-upload-profile").files;
  var thumnail = document.getElementById("js-thumnail");
  function readAndPreview(fileList) {
    if (/\.(jpe?g|png|gif)$/i.test(fileList.name)) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          let image = new Image();
          if (
            thumnail.innerHTML !== null ||
            thumnail.innerHTML !== "undefined"
          ) {
            thumnail.innerHTML = "";
          }

          image.width = "200";
          image.height = "120";
          image.title = fileList.name;
          image.src = this.result;
          thumnail.appendChild(image);
        },
        false
      );

      if (fileList) {
        reader.readAsDataURL(fileList);
      }
    }
  }

  if (fileList) {
    [].forEach.call(fileList, readAndPreview);
  }
}

function uploadBackground() {
  let fileList = document.getElementById("js-upload-back-img").files;
  var thumnail = document.getElementById("js-back-img");
  function readAndPreview(fileList) {
    if (/\.(jpe?g|png|gif)$/i.test(fileList.name)) {
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          let image = new Image();
          if (
            thumnail.innerHTML !== null ||
            thumnail.innerHTML !== "undefined"
          ) {
            thumnail.innerHTML = "";
          }

          image.width = "350";
          image.height = "250";
          image.title = fileList.name;
          image.src = this.result;
          thumnail.appendChild(image);
        },
        false
      );

      if (fileList) {
        reader.readAsDataURL(fileList);
      }
    }
  }

  if (fileList) {
    [].forEach.call(fileList, readAndPreview);
  }
}

function preventReload(e) {
  if (
    (e.ctrlKey == true && (e.keyCode == 78 || e.keyCode == 82)) ||
    e.keyCode == 116
  ) {
    e.keyCode = 0;
    e.cancelBubble = true;
    e.returnValue = false;
  }
}
document.onkeydown = preventReload;
