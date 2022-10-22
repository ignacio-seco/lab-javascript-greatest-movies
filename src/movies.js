// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/*function getAData(moviesArray,key)
{//apesar de funcionar, fiz com loop e sem os metodos avançados de array, vou refazer da forma correta  
  let allData
    allData=[]
   for(let i=0;i<moviesArray.length;i++)
    {
        if(allData.indexOf((moviesArray[i])[key])===-1)
        {
            allData.push((moviesArray[i])[key]);
        }
        else continue
    }
    return allData
}

function getAllDirectors(movies) {
return getAData(movies,'director')
}*/
function mapThis(array,key){
    function upperCaseTransform (itema,keya)
  {return  (Object.keys(itema)[((((Object.keys(itema)).map((l)=>l.toUpperCase())).indexOf(keya.toUpperCase())))])
  }
    let mappedArray = array.map((k)=>k[upperCaseTransform(k,key)])
    return mappedArray
  }
function getAllDirectors(movies) {
let allDirectors = mapThis(movies,"DIRECTOR")
let filteredDirectors=allDirectors.filter((item,i)=>allDirectors.indexOf(item)===i)
    return filteredDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function filterThis(array,key2,value2)
{
  function upperCaseTransform (itema,keya)
{return  (Object.keys(itema)[((((Object.keys(itema)).map((l)=>l.toUpperCase())).indexOf(keya.toUpperCase())))])
}
  
  let filteredList = array.filter((item)=>
                                  (Array.isArray(item[upperCaseTransform(item,key2)])
                                   &&
                                   (item[upperCaseTransform(item,key2)].map((p)=>p.toUpperCase())).indexOf(value2.toUpperCase())!==-1)
                                  ||
                                  ((! (Array.isArray(item[upperCaseTransform(item,key2)]))) && ((item[upperCaseTransform(item,key2)]).toUpperCase()===value2.toUpperCase())))
    return filteredList
    }
function howManyMovies(moviesArray) 
{
    let directorArr = filterThis(moviesArray,'diRECtor','stEveN SpiElBErg')
    let genre = filterThis(directorArr,"GenrE","DRaMa")
    return genre.length    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length>0){
    let allScore = mapThis(moviesArray,"ScOrE");
    let allScoreConverted = allScore.map((k)=>{if(typeof k==="number"){return k} else return 0 })
    let sumScore= allScoreConverted.reduce((acumulado,scoreAtual)=>acumulado+scoreAtual);
    let averageScore = sumScore/(allScore.length)
      return (Math.round(averageScore * 1e2 ) / 1e2)}
    else return 0
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray=filterThis(moviesArray,'gEnRe',"DRaMa")
    if (dramaArray.length>0)
        { 
        let allScore= mapThis(dramaArray,"sCoRe");
        let sumScore= allScore.reduce((acumulado,scoreAtual)=>acumulado+scoreAtual);
        let averageScore = sumScore/(allScore.length);
    return parseFloat(averageScore.toFixed(2))
    }
    else return 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray=moviesArray.map((e,i)=>{return{index:i, title:e.title, year:e.year}})
    let ascendingYear=newArray.sort((a,b)=>{if(a.year===b.year){if(a.title<b.title){return -1} else return 1} else if(a.year<b.year){return -1} else return 1})
    let rebuildArray=ascendingYear.map((p)=>moviesArray[p.index])
    return rebuildArray    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let topTwenty
    if(moviesArray.length<20){topTwenty=moviesArray.length} else topTwenty=20
    let topList=[]
    for(let i=0;i<topTwenty;i++){topList.push(i)}
    { //console.log(topList)
    let newArray=moviesArray.map((e)=> e.title)
    let ascendingTitle=newArray.sort((a,b)=>{if(a<b){return -1} else return 1})
    //console.log(ascendingTitle)
    let top=topList.map((n)=>ascendingTitle[n])
    return top
}
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray=moviesArray.map((e,i)=>{return{index:i, duration:e.duration}})
console.log(newArray)    
let changeFormat=newArray.map((w)=>w.duration=((((w.duration.replace("h ", "*60+")).replace("min","")).replaceAll(`'`,""))))


}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
