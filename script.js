let imageDivs = document.querySelectorAll('casinoLogo');

let tabsChoice = document.querySelectorAll('.tabs-choice');

// tabsChoice.forEach(choice => {
//     choice.addEventListener('click', e => {
//         tabsChoice.forEach(c => {
//             c.classList.remove('selected');
//         })
//         choice.classList.add('selected');

//         let tabsContent = document.querySelector('.tabs-content');
//         let contentElement = document.getElementById(choice.getAttribute('data-content')).innerHTML;
//         console.log(contentElement);
//         let tempDiv = document.createElement('div');
//         tempDiv.innerHTML = contentElement;
//         tabsContent.innerHTML = '';
//         console.log(tempDiv);
//         tabsContent.appendChild(tempDiv);
//     })

// })

let tabToShow = (tab, tabContent) => {
    document.getElementsByClassName('selected-tab')[0].classList.remove('selected-tab');
    tab.classList.add('selected-tab');

    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementById(tabContent).classList.add('active');
}

tabsChoice.forEach(tab => {
    tab.addEventListener('click', () => {
        let tabContent = tab.getAttribute('data-content');
        tabToShow(tab, tabContent);
    })
    
})