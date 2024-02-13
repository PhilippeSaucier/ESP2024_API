import React from "react";


const TestComponent = () => {

const [message, setMessage] = React.useState("");
const [newMessage, setNewMessage] = React.useState("");

    async function voirMessage(){
        try {
            const response = await fetch(
                "http://localhost:5000/api/test",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            const data = await response.json();
            setMessage(data);

        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    async function addMessage(){
        try {
            console.log("newMessage:"+newMessage);
            const response = await fetch(
                "http://localhost:5000/api/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ message: newMessage })
                }
            );
            const data = await response.json();
            console.log("Data:"+data);
            
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    async function deleteMessage(){
        try {
            const response = await fetch(
                "http://localhost:5000/api/delete",
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ message: newMessage })
                }
            );
            const data = await response.json();
            console.log("Data:"+data);
            
        }
        catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        
        <div>
            <button onClick={voirMessage}>Voir messages</button>
            <h1>{message}</h1>

            <input type="text" onChange={(e) => setNewMessage(e.target.value)} />
            <button onClick={addMessage}>Add messages</button>
            <button onClick={deleteMessage}>Delete messages</button>
        </div>
    );
};

export default TestComponent;