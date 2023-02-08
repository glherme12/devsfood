import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search == '' ?  false : true);
    
    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search == '') {
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch( e.target.value );
    }
    
    return(
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="Pesquise por um produto ou loja"
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    );
}
/*API
GET = Pegar informação
POST = Adicionar informação
PUT = Alterar informação
*/
