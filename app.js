// // Select all LI's on the page:
// const allLis = document.querySelectorAll('li');

// // One option, a regular for loop:
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
// }

// //Another option using for...of:
// for (let li of allLis) {
//   li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
// }
// innerHtml
// get set attribute
// 142 - Finding ParentChildrenSiblings English
// const allLis = document.querySelectorAll("li");
// for (let i = 0; i < allLis.length; i++) {
//   const element = allLis[i];
//   console.log((element.innerHTML = "<b>wc</b>"));
// }
// for (const li of allLis) {
//   console.log((li.style.color = "red"));
// }
const allLis = document.querySelectorAll("li");
const colors = ["red", "green", "blue", "orange", "tomato", "yellow"];
// for (let i = 0; i < allLis.length; i++) {
//   const c = colors;
//   const element = allLis[i];
//   console.log(element, c[i]);
//   element.style.color = c[i];
// }
// let count = 0;
// for (const l of allLis) {
//   console.log(l);
//   count += 1;
//   console.log(l, count - 1);
//   l.style.color = colors[count - 1];
// }

allLis.forEach((e, i) => {
  console.log((e.innerText = "c"), i);
  e.style.color = colors[i];
});
