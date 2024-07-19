import React, { useState, useEffect, useRef } from 'react';
import style from "../styles/Body.module.css"
 
const Example = ["The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.The quick brown fox jumps over the lazy dog."];

const Body = () => {
    const [input, setInput] = useState("");
    const [sentence, setSentence] = useState([]);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const randomSentence = Example[Math.floor(Math.random() * Example.length)];
        setIsRunning(true)
        setSentence(randomSentence.split(''));
        console.log(sentence)
    }, []);

    useEffect(() => {
        let interval = undefined;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isRunning])
    

    async function logJSONData() {
        const response = await fetch("http://example.com/movies.json");
        const jsonData = await response.json();
        console.log(jsonData);
    }




    return (
        <div className={style.Body} >
            <time className={style.stopwatch}>
                {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} : {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
            </time>

            <div className={style.formField}>
                <div className={style.cursor}></div>

                <div className={style.example}>
                    {
                        sentence.map((a, i) => {
                            return <span className={style.word} key = {i}>{sentence[i] === ' ' ? "\u00A0" : sentence[i]}</span>
                        })
                    }

                </div>
            </div>
        </div>
    );
}

export default Body;