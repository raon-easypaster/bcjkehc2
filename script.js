// 자동 목차 생성
const pages = document.querySelectorAll(".page");
const toc = document.getElementById("toc");

pages.forEach((page,i)=>{
  const a = document.createElement("a");
  a.href = "#" + page.id;
  a.innerText = i+1;
  toc.appendChild(a);
});

// 검색 기능
document.getElementById("searchInput")
.addEventListener("keyup",function(){
  const keyword = this.value.toLowerCase();
  pages.forEach(page=>{
    page.style.display =
      page.innerText.toLowerCase().includes(keyword)
      ? "block" : "none";
  });
});

// 재정 자동 합산
function calculateFinance(){
  const incomeCells =
    document.querySelectorAll(".income");
  const expenseCells =
    document.querySelectorAll(".expense");

  let income=0, expense=0;

  incomeCells.forEach(td=>{
    income += Number(td.innerText.replace(/,/g,""));
  });
  expenseCells.forEach(td=>{
    expense += Number(td.innerText.replace(/,/g,""));
  });

  document.getElementById("incomeTotal").innerText =
    income.toLocaleString();
  document.getElementById("expenseTotal").innerText =
    expense.toLocaleString();
  document.getElementById("balance").innerText =
    (income-expense).toLocaleString();
}
