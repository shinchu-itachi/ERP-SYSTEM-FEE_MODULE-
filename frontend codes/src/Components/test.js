const data = 
    [
        {
            "population":403040030,
            "area": 5068
        }
    ]


function find(data){
var population = data.population
var area = data.area

var ans = Math.round(population/area)
return ans;
}

find ( data )