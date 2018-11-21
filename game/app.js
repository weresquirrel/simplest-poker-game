console.log('up N ...');

function callback() {
  console.log('... running');
}

if (
    document.readyState == "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
