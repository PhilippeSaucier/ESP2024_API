import React from "react";


const TestComponent = () => {

const [message, setMessage] = React.useState("");

    async function callApi(){
        try {
            const response = await fetch(
                "http://localhost:5000/test",
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

    return (
        
        <div>
            <button onClick={callApi}>Call Api</button>
            <h1>{message}</h1>
        </div>
    );
};

export default TestComponent;