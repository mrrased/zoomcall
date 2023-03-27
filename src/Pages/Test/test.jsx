import React from 'react';
import { useNavigate } from 'react-router-dom';

const test = () => {

    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate('/list')}>create metting</button>
        </div>
    );
};

export default test;