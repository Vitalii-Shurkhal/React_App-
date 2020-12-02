import React from "react";
import styles from './Dialogs.module.css'
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}
const Message = (props) => {
    return (
        <div className={styles.message}>{props.message}</div>
    )
}
const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData.map((message) => {
        return (
            <Message id={message.id} message={message.message} />
        )
    });

    let newMessage = React.createRef();
    let sendMessage = () => { alert(newMessage.current.value) }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessage} name="newMessages" className={styles.newMessage} placeholder='Write smt'></textarea>

                <button onClick={sendMessage} className={styles.sendBtn}>Send</button>
            </div>



        </div>
    )

}

export default Dialogs

