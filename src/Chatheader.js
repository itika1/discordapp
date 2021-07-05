import React from 'react';
import "./Chatheader.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

function Chatheader( channelName ) {
    return (
        <div className="chatheader">
        
            <div className="chatheader_left">
                <h3>
                    <span className="chatheadername">#
                    </span>{channelName}
                </h3>
            </div>
            <div className="chatheader_right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatheadersearch">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default Chatheader
