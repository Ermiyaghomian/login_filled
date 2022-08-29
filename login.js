document.querySelectorAll(".text-input").forEach((Element) {
    Element.addEventListener("blur" , (event) {
        if(event.target.value ) {
            event.target.nextElementSibling.ClassList.add("filled");
        } else{
            event.target.nextElementSibling.ClassList.remove(filled);
        }
    });
});