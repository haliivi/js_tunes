export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio'),
          radioCoverImg = document.querySelector('.radio-cover__img'),
          radioNavigation = document.querySelector('.radio-navigation'),
          radioHeaderBig = document.querySelector('.radio-header__big'),
          radioItem = document.querySelectorAll('.radio-item'),
          radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();

    const changeIconPlay = () => 
        audio.paused ? (
            radio.classList.remove('play'),
            radioStop.classList.add('fa-play'),
            radioStop.classList.remove('fa-stop')
        ) : (
            radio.classList.add('play'),
            radioStop.classList.remove('fa-play'),
            radioStop.classList.add('fa-stop')
        );

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    };

    audio.type = 'audio/aac';
    radioStop.disabled = true;
    
    radioNavigation.addEventListener('change', event => {
        const target = event.target,
              parrent = target.closest('.radio-item');
        selectItem(parrent);
        const title = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;
        const urlImg = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = urlImg;
        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        audio.paused ? audio.play() : audio.pause()  
        changeIconPlay();
    });

    radioPlayerInit.stop = () => {
        audio.pause();
        changeIconPlay();
    };
};