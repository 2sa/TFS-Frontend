 function anagrams()
{
    var word1 = prompt("Enter first word");
    var word2 = prompt("Enter first word");

    word1 = word1.split("").sort().join("");
    word2 = word2.split("").sort().join("");  
    alert(word1);        

    if(word1 === word2)
    {
        alert("Это анаграммы!");
    }
    else
    {
        alert("Это не анаграммы!");
    }
}

function consoleTask()
{
    function log(idx)
    {
        setTimeout(
            function()
            {
                console.log(idx);
            },
            1000);
    }

    var idx = 0;

    for (var i = 0; i < 10; i++)
    {
        idx = i;

        log(idx);
    }
}
