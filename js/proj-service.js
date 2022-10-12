'use strict'



var gProjects = [
    {
        id: "in-picture",
        name: "in-picture",
        title: "what is in the picture",
        desc: "u need to find the correct answer for each picture",
        url: "projects/in-picture/picture.html",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: "touch-nums",
        name: "touch-nums",
        title: "touch nums game",
        desc: "you need to tap the numbers in corect order",
        url: "projects/touch-nums/touch-nums.html",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]

function getProjects() {
    return gProjects
}

function getCurrProject(project){
    return gProjects.filter(proj =>  proj.id === project)
}