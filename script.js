const tbxKoefA = document.getElementById("tbxKoefA");
const tbxKoefB = document.getElementById("tbxKoefB");
const tbxKoefC = document.getElementById("tbxKoefC");
const txaResult = document.getElementById("txaResult");

function korenyRovnice() {
    let a = Number(tbxKoefA.value);
    let b = Number(tbxKoefB.value);
    let c = Number(tbxKoefC.value);
    if (a!=0) {
        // řešení kvadratické rovnice
        let D = b*b-4*a*c;

    }
    else {
        // řešení lineární rovnice
    }
}