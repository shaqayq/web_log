module.exports = (data) => {
    let error = []
    if(data.title === "") {
        error.title = "Please Enter Post Title!!";
        
    }
    if(data.slug === "") {
        error.slug= "Please Enter Post Slug!!" ;
    }
    if(data.content === "") {
        error.content= "Please Enter Post Content!!" ;
    }
    

    return error;
}