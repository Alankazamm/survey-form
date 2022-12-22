let btn = document.querySelector('#btn-hm-pg');
btn.addEventListener("mouseleave", () => btn.innerText = "Let's go")
btn.addEventListener("mouseenter", () => btn.innerText = "Just Go Ahead")
btn.addEventListener( "touchend", () => btn.innerText = "Let's go")
btn.addEventListener( "touchstart", () => btn.innerText = "Just Go Ahead")

