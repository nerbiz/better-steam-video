function BetterSteamVideo() {
    const self = this;

    /**
     * Video elements on the current page
     * @type {HTMLCollection}
     */
    self.videoElements = document.getElementsByClassName('highlight_movie');

    /**
     * Video control elements on the current page
     * @type {HTMLCollection}
     */
    self.videoControlElements = document.getElementsByClassName('html5_video_overlay');

    /**
     * Check whether the current page has video elements
     * @return {boolean}
     */
    self.pageHasVideo = () => (self.videoElements.length > 0);

    /**
     * Remove Steam's own video controls
     * @return {void}
     */
    self.removeSteamControls = () => {
        for (let i = 0; i < self.videoControlElements.length; i++) {
            self.videoControlElements[i].remove();
        }
    };

    /**
     * Show the default HTML5 video controls in the video elements
     * @return {void}
     */
    self.showHtml5Controls = () => {
        for (let i = 0; i < self.videoElements.length; i++) {
            self.videoElements[i].setAttribute('controls', 'controls');
        }
    };
}

const betterSteamVideo = new BetterSteamVideo();

if (betterSteamVideo.pageHasVideo()) {
    betterSteamVideo.removeSteamControls();
    betterSteamVideo.showHtml5Controls();
}
