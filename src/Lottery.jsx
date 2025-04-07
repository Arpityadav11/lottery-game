import React, { useState } from "react";
import functions from "./functions";
import LotteryWinner from "./LotteryWinner";
import TryAgain from "./TryAgain";

export default function Lottery() {
    const [ticket, setTicket] = useState(null);
    const [isWinner, setIsWinner] = useState(false);

    const handleClick = () => {
        const newTicket = functions.generateRandomNumber();
        const sum = functions.sumOfDigits(newTicket);

        setTicket(newTicket);
        setIsWinner(sum === 15); // Check winning condition
    };

    return (
        <div>
            <h1>Lottery Game</h1>
            <button onClick={handleClick}>Generate Lottery Ticket</button>
            {ticket !== null && (
                <div>
                    <h2>Your Ticket: {ticket}</h2>
                    {isWinner ? <LotteryWinner /> : <TryAgain />}
                </div>
            )}
        </div>
    );
}
