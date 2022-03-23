function myFunction(){
    let req= new XMLHttpRequest();
    req.open("GET","https://api.covid19api.com/summary",false);
    req.send();
    let parsedData=JSON.parse(req.responseText);

    console.log(parsedData.Global.NewConfirmed);
    document.getElementById("globalNew").innerHTML = parsedData.Global.NewConfirmed;

    console.log(parsedData.Global.TotalConfirmed);
    document.getElementById("globalTotal").innerHTML = parsedData.Global.TotalConfirmed;

    for (let i=0; i<parsedData.Countries.length; i++){
        myObj=parsedData.Countries[i];
        if(myObj['Country']=='India'){
            console.log(myObj['NewConfirmed']);
            document.getElementById("indiaNew").innerHTML = myObj['NewConfirmed'];

            console.log(myObj['TotalConfirmed']);
            document.getElementById("indiaTotal").innerHTML = myObj['TotalConfirmed'];
        }
    }
}