const title1 = document.getElementById('project1-title');
const title2 = document.getElementById('project2-title');
const title3 = document.getElementById('project3-title');

const project1Content = document.getElementById('project1');
const project2Content = document.getElementById('project2');
const project3Content = document.getElementById('project3');

const changeProject1Display = (event) => {
    if(project1Content.classList.contains('hide')) {
        project1Content.classList.remove('hide')
    } else {
        project1Content.classList.add('hide');
    }
}

const changeProject2Display = (event) => {
    if(project2Content.classList.contains('hide')) {
        project2Content.classList.remove('hide')
    } else {
        project2Content.classList.add('hide');
    }
}

const changeProject3Display = (event) => {
    if(project3Content.classList.contains('hide')) {
        project3Content.classList.remove('hide')
    } else {
        project3Content.classList.add('hide');
    }
}

title1.onclick = changeProject1Display;
title2.onclick = changeProject2Display;
title3.onclick = changeProject3Display;
