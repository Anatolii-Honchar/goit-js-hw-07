const categoriesList = document.querySelector("#categories");

// 1. Кількість li.item
const items = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", items.length);

// 2. Для кожної категорії
items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
