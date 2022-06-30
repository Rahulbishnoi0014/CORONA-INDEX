const URL = "https://api.covid19api.com/summary"

function getApiData(URl) {
    fetch(URL).then((res) => { return res.json() }).then((data) => foundData(data));
}

function foundData(data) {
    const countries = data.Countries[77]
    

    var name = countries.Country;
    var date=new Date().toDateString();
    var TotalConfirmed = countries.TotalConfirmed;
    var TotalDeaths=countries.TotalDeaths;
    
    var newCases = countries.NewConfirmed;
    var newDeath = countries.NewDeaths;


    document.getElementById("country-name").innerText=(" : "+name);
    document.getElementById("date").innerText=(" : "+date);
    document.getElementById("total-cases").innerText=(" : "+TotalConfirmed);
    document.getElementById("total-death").innerText=(" : "+TotalDeaths);
    document.getElementById("new-cases").innerText=(" : "+newCases);
    document.getElementById("new-deaths").innerText=(" : "+newDeath);
};

getApiData(URL);