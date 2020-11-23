import React from 'react'
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import RepeatIcon from '@material-ui/icons/Repeat'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song detials</p>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__green" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <p>controls</p>
            </div>
        </div>
    )
}

export default Footer
