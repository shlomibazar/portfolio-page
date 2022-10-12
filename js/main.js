'use strict'


console.log('Starting up');

$(onInit)

function onInit() {
    renderProjects()
    
}



function renderProjects(){
    const projects = getProjects()
    const strHTMLs = projects.map(project => `
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
        </div>
    </div>
        <img class="img-fluid" src="img/portfolio/${project.id}.jpg" alt="hey">
        </a>
        <div class="portfolio-caption">
        <h4>${project.title}</h4>
        <p class="text-muted">${project.desc}</p>
        </div>
    </div>
    `)
    $('.projects').append(strHTMLs)

    const check = projects.map(project =>updateModal(project))
    console.log('check',check)

}

function updateModal(project){
    const $portfolioModal = $('portfolio-modal modal fade check')
    $portfolioModal.find('h2').text(project.name)
}

// id: "in-picture",
// name: "in-picture",
// title: "Better push those boxes",
// desc: "lorem ipsum lorem ipsum lorem ipsum",
// url: "projects/in-picture",
// publishedAt: 1448693940000,
// labels: ["Matrixes", "keyboard events"],