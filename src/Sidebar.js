import React, { useEffect } from "react";
import "./Sidebar.css";
import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import {Avatar} from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, {auth} from "./firebase";
import { useState } from "react";

function Sidebar() {
    const user= useSelector(selectUser);
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot =>(
            setChannels(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    channels: doc.data(),
                }))
            ))
        );
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");

        if (channelName){
            db.collection('channels').add({
                channelName: channelName,
            });
        }
    };

    return(
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Messy World</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebarchannels">
                <div className="sidebarchannelheader">
                    <div className="sidebarheader">
                        <ExpandMoreIcon />
                        <h4>Chat Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebaraddChannel" />
                </div>
                <div className="sidebarchannellist">
                    {channels.map(({ id, channel }) =>(
                        <SidebarChannel 
                            key={id} 
                            id={id}
                            channelName={channel.channelName} 
                        />
                    ))}
                </div>
            </div>
        <div className="sidebarvoice">
            <SignalCellularAltIcon className="sidebarvoiceicon" fontSize="large"/>
            <div className="sidebarvoiceinfo">
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className="sidebarvoiceicon">
                <InfoOutlinedIcon />
                <CallIcon />
            </div>
        </div>
        <div className="sidebarprofile">
            <Avatar onClick={ ()=> auth.signOut()} src={ user.photo } />
            <div className="sidebarprofileinfo">
                <h3>{ user.displayName }</h3>
                <p>#{user.uid.substring(0,5)}</p>
            </div>
            <div className="sidebarprofileicon">
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
    );
}

export default Sidebar;