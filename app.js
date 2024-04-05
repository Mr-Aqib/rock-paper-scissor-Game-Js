let images = ['paper.png', 'rock.png', 'scissor.png']
let resulttext = document.querySelector('.result')
let playerbtns = document.querySelectorAll('.p-btn')
let p1img = document.querySelector('.p1-img')
let p2img = document.querySelector('.p2-img')
let p1turn = false
let p2turn = false


playerbtns[1].disabled = true


const getrandnum = () => {
    let randnum = Math.random() * images.length
    let float = Math.floor(randnum)
    let randomimg = images[float]
    return randomimg
}


let p1randimgsaver
let p2randimgsaver



playerbtns.forEach((item) => {
    item.addEventListener('click', () => {
        if (!p1turn) //false 
        {
           
            p1randimgsaver = getrandnum()
            p1turn = true
            p2turn = false
            playerbtns[0].disabled=true
           playerbtns[1].disabled=false
           p1img.src = `./images/${p1randimgsaver}`
          
        } else if (!p2turn) //false
        {
           
            p2randimgsaver = getrandnum()
            
            p1turn = false
            p2turn = true //done
            playerbtns[0].disabled=false
           playerbtns[1].disabled=true
           p2img.src = `./images/${p2randimgsaver}`
        }
        if(p1randimgsaver=='scissor.png' && p2randimgsaver=='scissor.png')
        {
            resulttext.innerHTML='Match Tie'
        }
        else if(p1randimgsaver=='rock.png' && p2randimgsaver=='rock.png')
        {
            resulttext.innerHTML='Match Tie'
        }
        else if(p1randimgsaver=='scissor.png' && p2randimgsaver=='rock.png')
        {
            resulttext.innerHTML='Rock Wins'
        }
        else if(p1randimgsaver=='rock.png' && p2randimgsaver=='scissor.png')
        {
            resulttext.innerHTML='Rock Wins'
        }


        else if(p1randimgsaver=='scissor.png' && p2randimgsaver=='paper.png')
        {
            resulttext.innerHTML='Scissor Wins'
        }
        else if(p1randimgsaver=='paper.png' && p2randimgsaver=='scissor.png')
        {
            resulttext.innerHTML='Scissor Wins'
        }
        else if(p1randimgsaver=='paper.png' && p2randimgsaver=='rock.png')
        {
            resulttext.innerHTML='Paper Wins'
        }
        else if(p1randimgsaver=='rock.png' && p2randimgsaver=='paper.png')
        {
            resulttext.innerHTML='Paper Wins'
        }
    })

})

