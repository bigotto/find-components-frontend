import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/logo.png'

export default function Home() {
    const history = useHistory();
    const [name, setName] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        history.push({
            pathname: '/search',
            data: name
        })
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch}>
                <img src={Logo} alt="Nastek"/>
                <input 
                    type="text"
                    placeholder="Pesquise um componente" 
                    value={name}
                    onChange={e => { setName(e.target.value) }}
                />
            </form>
        </div>
    );
}