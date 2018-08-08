const HeaderSearch = function() {
    function init() {
        addEvents();        
    }
    function addEvents(){
        
        const searchForm = document.querySelector('.search-property');
        if(!searchForm){
            return;
        }
        //submit listener
        searchForm.addEventListener('submit',submitSearch); 
        
    } 
    function submitSearch(){
        const searchForm = document.querySelector('.search-property');
        const searchField = document.querySelector('.search-property__input');        
        if(!searchField.value){
            showError("This field cannot be empty");
            return false;
        } else {
            return true;
        }
    }
    function showError(message) {
        alert(message);
    }
    return {
        init : init
    }

};
HeaderSearch().init();