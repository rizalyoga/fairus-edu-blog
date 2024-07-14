const data = [
  { name: "seafood", category: "makanan", price: 5000 },
  { name: "kaos", category: "pakaian", price: 45000 },
  { name: "kemeja", category: "pakaian", price: 85000 },
  { name: "udang", category: "makanan", price: 3000 },
  { name: "ice-tea", category: "minuman", price: 9000 },
  { name: "ice-cream", category: "minuman", price: 8000 },
  { name: "nasi goreng", category: "makanan", price: 15000 },
  { name: "bakmie", category: "makanan", price: 10000 },
  { name: "sepatu", category: "pakaian", price: 90000 },
];

let category = data.reduce((acc, item) => {
  if (!acc[item.category]) {
    acc[item.category] = [];
  }
  acc[item.category].push(item);
  return acc;
}, {});

// console.log(category);

const dataArr = [1, 2, 3, 4, 5, 6];

const dataTotal = dataArr.reduce((prev, curr) => {
  return (prev += curr);
}, 0);

console.log(dataTotal);
