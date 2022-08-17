var http=new XMLHttpRequest();
http.onreadystatechange=function() {
    var output=document.getElementById("albm-div");
    if(http.status==200 && http.readyState==4){
        var obj=JSON.parse(this.response);
        for(var i=0;i<200;i++)
        {
            output.innerHTML+=`
            <div class="card">
            <img src="${obj[i].url}" class="img">
            <div class="inner-card">
                <span>${obj[i].title}</span>
            </div>
        </div>`;

        }

    }
}
http.open("GET","https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true );
http.send();