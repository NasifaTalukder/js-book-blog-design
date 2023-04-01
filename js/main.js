let addbook=document.querySelector(".addBook_btn");
let takeBook=document.querySelector("#takeBook");
let takeAuthor=document.querySelector("#takeAuthor");
let takeimg=document.querySelector("#takeimg");
let takePrice=document.querySelector("#takePrice");
let takeRate=document.querySelector("#takeRate");
let bookList=document.querySelector(".bookList");


let bookAdd=()=>{
    let book= takeBook.value;
    // console.log(book)
    let author=takeAuthor.value;
    // console.log(author);
    let img= takeimg.value;
    // console.log(img);
    let price=takePrice.value;
    // console.log(price);
    let rate=takeRate.value;

    if (book==""|| author==""||img==""|| price==""){
        alert("Please Fill up the full Book Add form");
    }else{
        bookList.innerHTML+=`<div class="blogCard">
        <div class="blog_Cont">
            <div class="image">
            <img src="${img}" alt="">
            </div>
            <div class="textcont">
                <div class="feature">
                    <button>Featured</button>
                </div>
                <div class="BookName">
                    <h3>${book}</h3>
                </div>
                <div class="authorName">
                    <p>${author}</p>
                </div>
                <div class="rating">
                    <i class="star fa fa-star" aria-hidden="true"></i>
                    <i class="star fa fa-star" aria-hidden="true"></i>
                    <i class="star fa fa-star" aria-hidden="true"></i>
                    <i class="star fa fa-star" aria-hidden="true"></i>
                    <i class="star fa fa-star" aria-hidden="true"></i>
                </div>
                <div class="price">
                    <h3>BDT ${price}</h3>
                </div>
            </div>
            <div class="leftIcons">
                <i class="icon fa fa-pencil-square-o" aria-hidden="true"></i>
                <i class="icon fa fa-trash-o" aria-hidden="true"></i>
            </div>
        </div>
    </div>`
    }
    takeBook.value="";
    takeAuthor.value="";
    takeimg.value="";
    takePrice.value="";
    takeRate.value="";



// console.log(blogCard)
}
