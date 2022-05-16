var services = new Services();

function getListTeacher() {
  //show Loading
  document.getElementById("loading").style.display = "block";
  services
    .fetchData()
    .then(function (result) {
      //hide Loading
      document.getElementById("loading").style.display = "none";
      renderHTML(result.data);
      console.log(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListTeacher();

function renderHTML(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var teacher = arr[i];
    content += `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card cardPhone">
            <img src="./img/teacher_${i+1}.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <div>
                    <h3 class="cardPhone__title">${teacher.hoTen}</h3>
                    <p class="cardPhone__text">${teacher.moTa}</p>
                </div>
                <div>
                    <h3 class="cardPhone__title">$${teacher.ngonNgu}</h3>
                </div>
                </div>
                <div class="d-flex justify-content-between">
                <div class="cardPhone__rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div>
                    <button class="btnPhone-shadow">
                    <i class="fa fa-shopping-cart"></i> Buy Now
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;
  }

  document.getElementById("teacherList").innerHTML = content;
}
