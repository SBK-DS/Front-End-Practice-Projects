// Creating random data

var words = [
    {
        v : "RohitSharma",
        h : "Wanted to be pakistan's cricket team coach but out once on 0."
    },
    {
        v : "car",
        h : "Used in traveling daily."
    },
    {
        v : "javascript",
        h : "One of the most popular scripting languages."
    },
    {
        v : "python",
        h : "Programming language on the name of an animal."
    },
    {
        v : "React",
        h : "Library of javascript"
    },
    {
        v: "AAAAA",
        h: "Repeated"
    }

]


// Selecting randond number 
let QN = Math.floor(Math.random()*(words.length))

var ques = words[QN].v.toUpperCase().split('')
var ques_check = []
for(let i=0; i<ques.length; i++)
{
    ques_check.push(undefined)
}
// Creating Input Blocks
for(let i=0; i<words[QN].v.length; i++)
{
    var div = document.createElement('div')
    div.className = 'Input';
    document.getElementById('Input-Area').appendChild(div);
}

// Creating Hint

var span = document.createElement('span')

span.innerText = "Hint: " + words[QN].h;
document.getElementById('Hint').appendChild(span)

var live_count = 10;

document.getElementById('live').innerHTML = live_count;


var single_entries = []
document.querySelectorAll('#btn').forEach(temp => {
    temp.addEventListener('click', function() {    
        if(ques.join('') === ques_check.join(''))
        {
            alert("Congratulations!!!! You've saved the guy")
            location.reload();
        }
        if(live_count == 0)
        {
            alert('You cannot play anymore, The guy has been')
            location.reload()
        }
        else
        {
            if(ques.indexOf(temp.value) === -1 || ((single_entries !== undefined) && (single_entries.indexOf(temp.value) !== -1)))
            {
                live_count--;
                document.getElementById('live').innerHTML = live_count

                var hang = document.getElementsByClassName('M')
                hang[9-live_count].style.display = 'block';
    
            }
            else
            { 
                var val = undefined
                var ind = undefined
                var boxes = document.getElementsByClassName('Input')
    
                if(ques.indexOf(temp.value) !== ques.lastIndexOf(temp.value))
                {
                    var rep = []
                    for(let i=0; i<ques.length; i++)
                    {
                        if(ques[i] === temp.value)
                        {
                            rep.push(i);
                        }
                    }
                }
                if(rep !== undefined)
                {
                    for(let i=0; i<rep.length; i++)
                    {
                        boxes[rep[i]].innerHTML = temp.value
                        ques_check[rep[i]] = temp.value
                        console.log(ques_check)
                    }
                }
                else
                {
                    ind = ques.indexOf(temp.value)
                    val = ques[ind]
                    boxes[ind].innerHTML = val
                    single_entries.push(val)
                    ques_check[ind] = val
                    console.log(ques_check, ques)
                }
                
            }
        }         
    })
})


