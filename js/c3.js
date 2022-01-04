let data = [
  {
    area:"高雄",
    total: 800,
    url:"http://www.google.com"
  },
  
  {
    area:"台中",
    total: 300,
    url:"http://www.yahoo.com.tw"
  },
  {
    area: "台北",
    total: 1300,
    url:"http://www.msn.com.tw"
  }
]

// 篩選地區，整理成套件需要的物件格式
let totalObj = {};
data.forEach(function (item, index) {
    totalObj[item.area] = item.total
    totalObj[item.area] = item.total
})

// C3套件讀取格式 [["標題",帶入的數字]]
// 整理成套件所需格式
// newData = [["高雄", 800], ["台中", 300], ["台北",1300]]
let newData = [];
let area = Object.keys(totalObj);
area.forEach(function(item,index){
  let ary = [];
  ary.push(item);
  ary.push(totalObj[item]);
  newData.push(ary);
})

// 將 newData 丟入 c3 產生器
const chart = c3.generate({
  bindto: "#chart",
  data: {
    columns:  newData,
      type: 'donut',
      colors: {
          "台北": 'rgb(255, 99, 132)',
          '台中': 'rgb(54, 162, 235)',
          '高雄':'rgb(255, 205, 86)'
    },
      onclick: function (e) {
          //需要點擊轉跳頁面 判斷點擊的地區與data是否相符
          data.forEach((item) => {
              if (e.name == item.area) {
                  window.location = item.url;
                }
          })
           
      },
  },
  donut: {
    title: "各地售價"
  }
});

function renderList(){
  const list = document.querySelector('.pieTable');
  let str = '';
  data.forEach(function(item){
    str+=`<td>${item.total}</td>`
  })
  list.innerHTML = str;
}
renderList()
