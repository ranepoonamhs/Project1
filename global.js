
const AllUsers = new Map([
    ["poonam","admin123"],
    ["priya","priya@123"],
    ["shriya","shriya@123"]
]);

var currentUser="";

AllBlogData=new Array();
class BlogData
{
    constructor (fname,email,mno,title,content,category,nickname){
        this.fname = fname;
        this.email=email;
        this.mno=mno;
        this.nickname=nickname;
        this.title = title;
        this.content = content;
        this.category=category;
    }
}

function AddBlogData()
{

}
