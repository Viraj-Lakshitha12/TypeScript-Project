var ownerName_inputElement = document.getElementById('ownerName');
var fixedAmount_inputElement = document.getElementById('fixedAmount');
var addFix_btn = document.getElementById('addFixBtn');
addFix_btn.addEventListener('click', function () {
    var ownerName = ownerName_inputElement.value;
    var fixedAmount = fixedAmount_inputElement.value;
    console.log("owner : ".concat(ownerName, " , fixed amount :").concat(fixedAmount));
});
