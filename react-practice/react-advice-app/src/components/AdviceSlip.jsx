import React, { useState, useEffect } from "react";
import axios from 'axios';
import { RANDOM_URL } from '../Constants';
import Advice from './Advice';
 

function AdviceSlip () {
    const [randAdvice, setRandAdvice] = useState(undefined);

    const getRandAdvice = () => {
        const slip = axios.get(RANDOM_URL);
        slip.then(({ data: { slip } }) => {
            setRandAdvice(slip.advice);
        });
    };
    useEffect(() => {
        getRandAdvice();
    }, []);

    return (
        <div className="advicewrap"> 
        <p>😫Feeling Down?</p>
        <button type="submit" onClick={getRandAdvice}>
            😁Get Advice 
            </button>
            <button type="submit">Ask Advice</button>
            <Advice randAdvice={randAdvice} />
        </div>
    );
}

export default AdviceSlip;