const HeaderSearch = function() {
    let errorTimeout = null;
    function init() {
        addEvents();        
    }
    function addEvents(){
        
        const searchForm = document.querySelector('.search-property');
        if(!searchForm){
            return false;
        }
        //submit listener
        searchForm.addEventListener('submit',submitSearch); 
        
    } 
    function submitSearch(evt){        
        const searchForm = document.querySelector('.search-property');
        const searchField = document.querySelector('.search-property__input');        
        if(!searchField.value){
            showError("This field cannot be empty");
            evt.preventDefault();
            return false;
        }
    }
    function showError(message) {
        const formErrors = document.querySelector('.search-property__form-errors');
        if(!formErrors){
            return false;
        }
        //populate and show error
        formErrors.innerHTML = message;
        formErrors.classList.remove("hidden");

        //reset the hide timout
        clearTimeout(errorTimeout);
        errorTimeout = setTimeout(function(){
            formErrors.classList.add("hidden");
        },8000);
    }
    return {
        init : init
    }

};
HeaderSearch().init();