function readMoreFunc() {
    var elem = document.getElementById("readMore");
    var btn = document.getElementById("readMoreBtn");
    console.log(elem.style.maxHeigh)
    console.log(elem.style);
    if(elem.style.maxHeight == '110px'){
        elem.style.maxHeight = 'unset';
        btn.innerText = 'less';
    }
    // else{
    //     // elem.
    // }
    // elem.style.maxHeight = 'unset'
    // elem.style.maxHeight = 'unset';
    // btn.innerText = 'less';
}