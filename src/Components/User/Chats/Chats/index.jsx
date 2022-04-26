import { useState, useEffect } from "react";
import { useAuth } from '../../../../hooks/useAuth';
import { useChat } from '../../../../hooks/useChat'

import Message  from '../../../Messages/index.jsx';
import { RenderChats } from "../RenderChats";

import { Dropdown } from 'semantic-ui-react';

import userIMG from '../../../../Assets/images/PersonImage.svg';
import { ChatsStyles } from './styles.js';

export default function Chats({ marginLeft }){
    const { user } = useAuth();
    const { getChats, chats, getChurches, churches } = useChat();
    const [newMessage, setNewMessage] = useState("");

    useEffect(async () => {
        await getChurches(user?.id_user);
    }, []);
    
    async function handleChangeRoom(roomId){
        await getChats(user?.id_user, roomId);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    //Opções das igrejas que o usuário está filiado, 
    //está sendo utilizado no Dropdown
    const options = []
    churches.map(church => {
        options.push({ 
            text: church.name, 
            value: church._id
        })
    })    

    return(
        <ChatsStyles marginLeft={marginLeft}>
            
            <div className='content'>

                <div className="header">
                    <h1>Conecte com sua Igreja, Igor.</h1>

                    <Dropdown
                        options={options} selection placeholder='Igreja filiada' 
                        onChange={(event, {value}) => {
                            handleChangeRoom(value)
                        }}    
                    />                   
                </div>

                <div className='chat'>

                    <div className='users col-3'>
                        <div className='searchPeople'> <h2>Buscar contato</h2> </div>

                        <RenderChats chats={chats}/>
                    </div>

                    <div className='conversation col-8'>
                        <div className='backgroundConversation'>
                            <div className='messages'>
                                <div className='messageBox'>
                                    Bom dia seus lindos!!!
                                    <img className='userImage' src={userIMG} alt="" />
                                </div>
                                <div className='messageBox left'>
                                    <img className='userImage' src={userIMG} alt="" />
                                    Bom dia seus feio!!!
                                </div>
                            </div>
                            <br />
                            <input 
                                type="text"
                                className="messageField"
                                placeholder="write something..."
                                onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage} 
                            />

                            <button type='submit' className='sendButton' onClick={handleSubmit}>Enviar</button>
                        </div>
                    </div>

                </div>
            </div>
        </ChatsStyles>
    );
}