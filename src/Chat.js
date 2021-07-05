import React from 'react';
import Chatheader from './Chatheader';
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import "./Chat.css";
import { useSelector } from 'react-redux';
import { selectChannelID, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import firebase from "firebase";
import db from "firebase";
function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelID);
    const channelName = useSelector(selectChannelName);
    const [input, setinput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection('channels')
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }

    }, [channelId]);

    const sendMessage= (e) =>{
        e.preventDefault();
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user
        });

        setinput("");
    };

    return (
        <div className="chat">
            <Chatheader channelName={channelName} />
            <div className="chatmessage">
                {messages.map((message) => (
                    <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
            </div>
            <div className="chatinput">
                <AddCircleIcon fontSize="large" />
                <form >
                    <input value={input} disabled={!channelId} onChange={e => setinput(e.target.value)}
                        placeholder={`Message #${channelName}`} />
                    <button disabled={!channelId} className="chatinputbutton" type="submit" conClick={sendMessage} >Send Message</button>
                </form>
                <div className="chatinputicon">
                    <CardGiftcardIcon />

                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
