  const btnTopo = document.getElementById("btnTopo");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnTopo.style.opacity = "1";
      btnTopo.style.visibility = "visible";
    } else {
      btnTopo.style.opacity = "0";
      btnTopo.style.visibility = "hidden";
    }
  };

  btnTopo.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

