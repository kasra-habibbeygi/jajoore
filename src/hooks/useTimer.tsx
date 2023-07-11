/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
import { useEffect, useState } from 'react';

const useTimer = (targetDate = 0): [number, number, number, number, (state: number) => void] => {
    const [countDown, setCountDown] = useState(targetDate);
    useEffect(() => {
        let myInterval = setInterval(() => {
            setCountDown(countDown - 1000);
        }, 1000);
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(myInterval);
        }
        return () => {
            clearInterval(myInterval);
        };
    });
    var days: number = Math.floor(countDown / (1000 * 60 * 60 * 24));
    var hours: number = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes: number = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds: number = Math.floor((countDown % (1000 * 60)) / 1000);

    if (days < 0) {
        days = 0;
    }
    if (hours < 0) {
        hours = 0;
    }
    if (minutes < 0) {
        minutes = 0;
    }
    if (seconds < 0) {
        seconds = 0;
    }

    const setNewCountDown = (state: number) => {
        setCountDown(state);
    };

    return [days, hours, minutes, seconds, setNewCountDown];
};

export default useTimer;
