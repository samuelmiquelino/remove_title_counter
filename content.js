setInterval(() => {
    changeTitle()
    var target = document.querySelector('title');
    var observer = new MutationObserver(function(mutations) {
        changeTitle()
    });
    var config = { subtree: true, characterData: true };
    observer.observe(target, config);    
},3000);

function changeTitle(){
    var reg = new RegExp(/^\(\d*\)$/)
    var title = document.querySelector('title')
    var text_arr = title.text.split(' ')
    if(reg.test(text_arr[0])){
        //remove first position
        text_arr.shift()
        title.text = text_arr.join(' ')
    }
}