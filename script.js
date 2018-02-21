class Post{
  constructor(title){
    this.title = title
    this.comments = []
    this.render()
    this.addEvents = this.addEvents.bind(this)
    this.addEvents(document.querySelectorAll('.cont li button'), document.querySelectorAll('.newComm'))
  }

  render(){
    const posts = document.querySelector('.posts')
    posts.innerHTML += `
      <div class="post">
        ${this.title}
        <div class="cont">
          <ul>
            <li> Comment 1 <button> X </button> </li>
            <li> Comment 2 <button> X </button> </li>
          </ul>
          <div class="btnContain">
            <button class="newComm"> +Add Comment </button>
          </div>
        </div>
      </div>
    `
    this.numPosts++
  }

  addEvents(del, add){
    del.forEach((d)=>{
      d.addEventListener('click', (e)=>{
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        document.querySelector('.deleted').innerHTML += `<p class="">${e.target.parentNode.firstChild.nodeValue}</p>`
      })
    })
    add.forEach((a)=>{
      a.addEventListener('click', (e)=>{
        const comment = window.prompt('Add a comment')
        e.target.parentNode.parentNode.childNodes[1].innerHTML += `
        <li>${comment}<button> X </button> </li>
        `
        this.addEvents(document.querySelectorAll('.cont li button'), document.querySelectorAll('.newComm'))
      })
    })
  }
}

function main(){
  const post1 = new Post(`This is a Post`)
  const post2 = new Post(`This is a Post`)
  document.querySelector('.addPost').addEventListener('click', e=>{
    const p = window.prompt(`What is your post?`)
    const post = new Post(p)
  })
}

main()