const itemListEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemListEl.length}`);
itemListEl.forEach((item) =>
  console.log(
    `Category: ${item.querySelector("h2").textContent}`,
    `Elements: ${item.querySelectorAll("li").length}`
  )
);
