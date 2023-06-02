const itens = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": [],
        "box": "box-itens"
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"],
        "box": "box-itens"
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"],
        "box": "box-itens"
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": [],
        "box": "box-itens"
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"],
        "box": "box-itens"
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"],
        "box": "box-itens"
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"],
        "box": "box-itens"
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"],
        "box": "box-itens"
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"],
        "box": "box-itens"
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"],
        "box": "box-itens"
    }
]

const item = document.querySelector('.item')

window.addEventListener('DOMContentLoaded', () => {



    let displayItem = itens.map((info) => {
        let novo = info.new ? '<button id="new">New!</button>' : ''
        let featured = info.featured ? '<button id="featured">Featured</button>' : ''
        let languages = info.languages.length ? `<input type="button" value="${info.languages}">` : ''
        let tools = info.tools.length ? `<input type="button" value="${info.tools}">` : ''
        return `<section class="item" ${info.box} >
                <div class="itens-indi">
    <div id="logo"><img src= ${info.logo} alt=""></div>
    <article class="infos">
   <section class="header"><p id="companhia">${info.company}</p>
   <div class="button">${novo}
   ${featured}
   </div></section>
      <article class="filtters">
      <a id="position" href="#"> ${info.position}</a>
      <div class="buttons">
      <input type="button" value=${info.role}>
      <input type="button" value= ${info.level}>
      ${languages}
       ${tools}
      </div>
    </article>
     
      <div class="infosContrato">
        <h4> ${info.postedAt}</h4>
        <div class="ponto"></div>
        <h4>${info.contract}</h4>
        <div class="ponto"></div>
        <h4>${info.location}</h4>
        
      </div>
    </article>

    
    </div>
  </section>`
    })
    displayItem = displayItem.join("")
    item.innerHTML = displayItem
})