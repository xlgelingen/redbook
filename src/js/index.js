import '../less/index.less';



(function () {
    function resizeRem() {
        let docElement = document.documentElement;
        let width = docElement.getBoundingClientRect().width;
        let rem = width / 7.5;
        docElement.style.fontSize = rem + 'px';
    }
    window.addEventListener('resize', resizeRem);
    window.addEventListener('pageshow', resizeRem);
})();

const Page = {

    init(){
        this.bind();
    },

    bind(){
        let iconBf = document.getElementById('icon-bf');
        iconBf.addEventListener('click', this.playVideo);
        window.addEventListener('beforeunload',this.recover);
    },

    playVideo(){
        let video = document.getElementById('video-mainer');
        let bannerCover = document.getElementById('banner-cover');
        let zIndexBannerCover = parseInt(window.getComputedStyle(bannerCover).zIndex);
        video.style.zIndex = zIndexBannerCover + 1;
        video.play();
    },

    recover(){
        let video = document.getElementById('video-mainer');
        video.style.zIndex = 5;
        video.pause(); 
    }
}

Page.init();

