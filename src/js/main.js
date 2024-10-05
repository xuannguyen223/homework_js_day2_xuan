// BÀI TẬP BẬT TẮT ĐÈN

let bullonID = document.querySelector("#bullon");

bullonID.addEventListener("click", function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào nút bật đèn");

  document.querySelector("#light").src = "./img/pic_bulbon.gif";
});

let bulloffID = document.querySelector("#bulloff");

bulloffID.addEventListener("click", function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào nút tắt đèn");

  document.querySelector("#light").src = "./img/pic_bulboff.gif";
});

function turnOn() {
  console.log("Bạn đang di chuột vào tim đèn");
  document.querySelector("#light").src = "./img/pic_bulbon.gif";
}

function turnOff() {
  console.log("Bạn đã di chuột ra khỏi tim đèn");
  document.querySelector("#light").src = "./img/pic_bulboff.gif";
}

// BÀI TẬP HIỂN THỊ MẬT KHẨU

let loginBtn = document.querySelector("#login");

loginBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn Đăng nhập");

  let createTagP = document.createElement("p");
  createTagP.innerHTML =
    "Bạn đã nhập sai tài khoản hoặc mật khẩu, vui lòng kiểm tra lại";
  createTagP.classList.add("pink");
  loginBtn.closest(".area").appendChild(createTagP);
};

let eyeBtn = document.querySelector("#eye");

eyeBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào icon eye");

  let typeInputPassword = document.querySelector("#password").type;

  // if (typeInputPassword == "password") {
  //   document.querySelector("#password").type = "text";
  //   eyeBtn.innerHTML = `<i class="fa fa-eye"></i>`;
  // } else if (typeInputPassword == "text") {
  //   document.querySelector("#password").type = "password";
  //   eyeBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`;
  // } else {
  //   console.log("This type doesn't support click");
  // }

  switch (typeInputPassword) {
    case "password":
      document.querySelector("#password").type = "text";
      eyeBtn.innerHTML = `<i class="fa fa-eye"></i>`;
      break;
    case "text":
      document.querySelector("#password").type = "password";
      eyeBtn.innerHTML = `<i class="fa fa-eye-slash"></i>`;
      break;
    default:
      console.log("This type doesn't support click");
  }
};

// BÀI TẬP TÍNH LƯƠNG NHÂN VIÊN

let totalSalaryBtn = document.querySelector("#totalSalary");

totalSalaryBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn tính lương");

  let totalSalary =
    document.querySelector("#workingDay").value *
    1 *
    document.querySelector("#salary").value *
    1;

  document.querySelector("#salaryResult").innerHTML = totalSalary;
  document.querySelector("#nameResult").innerHTML =
    document.querySelector("#name").value;
};

// BÀI TẬP TÍNH ĐIỂM TRUNG BÌNH

let submitScoreBtn = document.querySelector("#submitScore");

submitScoreBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn Tính điểm trung bình");

  let score1 = document.querySelector("#score1").value * 1;
  let score2 = document.querySelector("#score2").value * 1;
  let score3 = document.querySelector("#score3").value * 1;
  let score4 = document.querySelector("#score4").value * 1;
  let score5 = document.querySelector("#score5").value * 1;

  let averageScore = (score1 + score2 + score3 + score4 + score5) / 5;
  document.querySelector("#averageScore").innerHTML = averageScore;
};

// BÀI TẬP QUY ĐỔI TIỀN TỆ

let convertBtn = document.querySelector("#convert");

convertBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn Quy đổi");

  let userMoney =
    document.querySelector("#exchangeRate").value *
    1 *
    document.querySelector("#quantity").value *
    1;

  document.querySelector("#quantityResult").innerHTML =
    document.querySelector("#quantity").value;
  document.querySelector("#moneyResult").innerHTML = userMoney;
};

// BÀI TẬP TÍNH CHU VI, DIỆN TÍCH HÌNH CHỮ NHẬT

let perimeterBtn = document.querySelector("#perimeter");

perimeterBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn Tính chu vi");

  let width = document.querySelector("#width").value * 1;
  console.log("width: ", width);
  let length = document.querySelector("#length").value * 1;
  console.log("length: ", length);

  let perimeter = (width + length) * 2;
  document.querySelector("#perimeterResult").innerHTML = perimeter;
};

let areaBtn = document.querySelector("#area");

areaBtn.onclick = function (event) {
  console.log("event: ", event);
  console.log("Bạn vừa click vào btn Tính diện tích");

  let width = document.querySelector("#width").value * 1;
  console.log("width: ", width);
  let length = document.querySelector("#length").value * 1;
  console.log("length: ", length);

  let area = width * length;
  document.querySelector("#areaResult").innerHTML = area;
};
