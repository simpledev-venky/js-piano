function playsound() {
  let keys = document.querySelectorAll(".keys");
  console.log(keys);

  keys.forEach((key) => {
    // console.log(key.children[1].innerHTML)
    key.addEventListener("click", (k) => {
      // console.log(k.path[1].children[1].innerHTML)
      // console.log(k.target.innerHTML)
      let patharr = k.path;
      Array.from(patharr);
      let keyName;
      patharr.forEach((ele) => {
        if (ele.className == "keys") {
          console.log(ele.children[1].innerHTML);
          keyName = ele.children[1].innerHTML;
        }
      });
      let aud = document.querySelector("audio");
      aud.src = `notes/${keyName}.mp3`;
      aud.play();
    });
  });
}
playsound();
