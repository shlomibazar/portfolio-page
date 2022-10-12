'use strict'


console.log('Starting up');

$(onInit)

function onInit() {
    renderProjects()
    
}



function renderProjects(){
    const projects = getProjects()
    const strHTMLs = projects.map(project => `
    <div class="col-md-4 col-sm-6 portfolio-item" >
        <a class="portfolio-link" data-toggle="modal"
         href="#portfolioModal6" data-proj="${project.id}">
         
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

    //$('.portfolio-link').click(renderModal())
    

    // $(".portfolio-link").each(function() {
    //     renderModal()
    //   });
   // projects.forEach(project => renderModal(project));
   
    $(".portfolio-link").on('click', function(){
        var proj =$(this).attr("data-proj")
        
        var currProj = getCurrProject(proj)
        renderModal(currProj[0])
    })
    
}





function renderModal(project){
    console.log('project in render',project)

    const strModaleHTML =  `
    <!-- Project Details Go Here -->
    <h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/06-full.jpg" alt="">
    <p>${project.desc}!</p>
    <a href="${project.url}" class="btn btn-primary " tabindex="-1" role="button" aria-disabled="true">Play Me</a>
    <ul class="list-inline">
      <li>Date: ${project.publishedAt}</li>
      <li>Client: Window</li>
      <li>Category: Photography</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    `
    $('.hey').append(strModaleHTML)

}


// id: "in-picture",
// name: "in-picture",
// title: "Better push those boxes",
// desc: "lorem ipsum lorem ipsum lorem ipsum",
// url: "projects/in-picture",
// publishedAt: 1448693940000,
// labels: ["Matrixes", "keyboard events"],