function x(){
    var s = document.querySelector("#standard").value;
    var t = document.querySelector("#page_range");
    switch(s){
        case 'std11':
            tg("true");
            t.innerHTML = '<option value="std_11_pr_1-30">1-30</option><option value="std_11_pr_31-60">31-60</option><option value="std_11_pr_61-90">61-90</option><option value="std_11_pr_91-120">91-120</option><option value="std_11_pr_121-150">121-150</option><option value="all11">All</option>'
            break;
        case 'std12':
            tg("true");
            t.innerHTML = '<option value="std_12_pr_1-30">1-30</option><option value="std_12_pr_31-60">31-60</option><option value="std_12_pr_61-90">61-90</option><option value="std_12_pr_91-120">91-120</option><option value="all12">All</option>'
            break;
        case 'download':
            t.innerHTML="";
            tg("false");
            break;
        default:
            tg("true");
            t.innerHTML = '<option value="std_11_pr_1-30">1-30</option><option value="std_11_pr_31-60">31-60</option><option value="std_11_pr_61-90">61-90</option><option value="std_11_pr_91-120">91-120</option><option value="std_11_pr_121-150">121-150</option><option value="all11">All</option>'
            break;
    }
    z();
}

function z(){
    var n = document.querySelector("#page_range").value;
    var y = document.querySelector("#frame");
    switch(n){
        case 'std_11_pr_1-30':
            y.src = "Arabic Std 11/pr_1-30.html"
            break;
        case 'std_11_pr_31-60':
            y.src = "Arabic Std 11/pr_31-60.html"
            break;
        case 'std_11_pr_61-90':
            y.src = "Arabic Std 11/pr_61-90.html"
            break;    
        case 'std_11_pr_91-120':
            y.src = "Arabic Std 11/pr_91-120.html"
            break;
        case 'std_11_pr_121-150':
            y.src = "Arabic Std 11/pr_121-150.html"
            break;
        case 'all11':
            y.src = "Arabic Std 11/main.html"
            break;
        case 'std_12_pr_1-30':
            y.src = "Arabic Std 12/pr_1-30.html"
            break;
        case 'std_12_pr_31-60':
            y.src = "Arabic Std 12/pr_31-60.html"
            break;
        case 'std_12_pr_61-90':
            y.src = "Arabic Std 12/pr_61-90.html"
            break;
        case 'std_12_pr_91-120':
            y.src = "Arabic Std 12/pr_91-120.html"
            break;
        case 'all12':
            y.src = "Arabic Std 12/main.html"
            break;
    }
}

function tg(v){
    if(v=="true"){
        document.querySelector("#page_range").style.display="inline-block";
        document.querySelector("#frame").style.display="block"
    }
    else{
        document.querySelector("#frame").style.display="none";
        document.querySelector(".download").style.display="block";
        document.querySelector("#page_range").style.display="none";
    }
}