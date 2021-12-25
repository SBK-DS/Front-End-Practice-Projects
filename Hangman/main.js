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
console.log(QN)
var ques = words[QN].v.toUpperCase().split('')
var ques_check = ques;
// Creating Input Blocks
for(let i=0; i<words[QN].v.length; i++)
{
    var div = document.createElement('div')
    div.className = 'Input';
    document.getElementById('Input-Area').appendChild(div);
}

// Creating Hint

var span = document.createElement('span')
console.log(words[QN].h)
span.innerText = "Hint: " + words[QN].h;
document.getElementById('Hint').appendChild(span)

var live_count = 10;

document.getElementById('live').innerHTML = live_count;


document.querySelectorAll('#btn').forEach(temp => {
    temp.addEventListener('click', function() {
        if(live_count == 0)
        {
            alert('You cannot play anymore, Refresh the page to play again!')
        }
        else
        {
            if(ques.indexOf(temp.value) === -1)
            {
                console.log('not found!')
                live_count--;
                console.log(live_count)
                document.getElementById('live').innerHTML = live_count

                var hang = document.getElementsByClassName('M')
                console.log(hang)
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
                console.log(rep)
                if(rep !== undefined)
                {
                    for(let i=0; i<rep.length; i++)
                    {
                        boxes[rep[i]].innerHTML = temp.value
                    }
                }
                else
                {
                    ind = ques.indexOf(temp.value)
                    val = ques[ind]
                    console.log(val, ind)
                    boxes[ind].innerHTML = val
                }
    
            }
        }
        
       
    })
})

