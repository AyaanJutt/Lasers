Math.randomint=function(low,high){
    return Math.floor(Math.random()*(high-low)+low)
}

Math.randomDec=function (low,high){
    return Math.random()*(high-low)+low
}

Math.roundTo=function(num,numPlaces){
    num=num*10**numPlaces
    num=Math.round(num);
    return num/10**numPlaces
}

Math.randomElement=function(anArray){
    return anArray[Math.randomint(0,anArray.length)]
}