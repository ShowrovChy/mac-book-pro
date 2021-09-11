// Get  Individual Cost Amount
function getCostAmount(costId, amount) {
  const costIdText = (document.getElementById(costId).innerText = amount);
  const costIdIs = parseInt(costIdText);
  return costIdIs;
}
// Get Total Cost Amount
function getTotalCost() {
  const bestPrice = parseInt(document.getElementById("best-price").innerText);
  const memoryCost = parseInt(document.getElementById("memory-cost").innerText);
  const storageCost = parseInt(
    document.getElementById("storage-cost").innerText
  );
  const deliveryConst = parseInt(
    document.getElementById("delivery-cost").innerText
  );
  let totalCost = parseInt(document.getElementById("total").innerText);
  totalCost = bestPrice + memoryCost + storageCost + deliveryConst;
  document.getElementById("total").innerText = totalCost;
  document.getElementById("grand-total").innerText = totalCost;
}
// GEt Individual Cost id
function getCostId(productBtn, productCostId, amount) {
  document.getElementById(productBtn).addEventListener("click", function () {
    getCostAmount(productCostId, amount);
    getTotalCost(); //total cost
  });
}

// Getting the individual CostId and individual cost
getCostId("memory-btn-8gb", "memory-cost", 0);
getCostId("memory-btn-16gb", "memory-cost", 180);
getCostId("ssd-btn-256", "storage-cost", 0);
getCostId("ssd-btn-512", "storage-cost", 100);
getCostId("ssd-btn-1tb", "storage-cost", 180);
getCostId("delivery-btn-regular", "delivery-cost", 0);
getCostId("delivery-btn-quick", "delivery-cost", 20);

// Get and check Promo Code
document.getElementById("promo-add-btn").addEventListener("click", function () {
  let promoField = document.getElementById("promo-code-input").value;

  if (promoField == "stevekaku") {
    //if promo code  match get 20% discount.
    let previousTotalCost = document.getElementById("total").innerText;
    let DiscountAmount = previousTotalCost * 0.2; /*----/ Here 20% = 0.20 /---*/
    let grandTotal = document.getElementById("grand-total");
    grandTotal.innerText = parseFloat(previousTotalCost - DiscountAmount);
    document.getElementById("promo-code-input").value = "";
  } else {
    let previousTotalCost = document.getElementById("total").innerText;
    let granTotal = document.getElementById("grand-total");
    granTotal.innerText = parseFloat(previousTotalCost);
  }
});
