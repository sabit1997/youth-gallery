import React, { useEffect, useState } from 'react';
import TopSearchNav from '../components/nav/TopSearchNav';
import axios from 'axios';
import UserSearch from '../components/UserSearch';
import Nav from '../components/nav/Nav';
import TabMenu from '../components/tab/TabMenu';
import styled from 'styled-components';

const Ul = styled.ul`
    margin: 60px 16px;
`;

const Li = styled.li`
    padding-top: 16px;
`;

function Search() {
    const [keyword, setKeyword] = useState('');

    const [users, setUsers] = useState([]);
    const url = 'https://mandarin.api.weniv.co.kr';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzE2MjM5ODJmZGNjNzEyZjQzMzk4YiIsImV4cCI6MTY2MjcwMTIyMiwiaWF0IjoxNjU3NTE3MjIyfQ.A75fUeLUj8TKdD1LVGGph-M1-coF8pr_oq8BY6R-k4k';

    useEffect(() => {
        axios({
            method: 'GET',
            url: url + `/user/searchuser/?keyword=${keyword}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json',
            },
        })
            .then((response) => setUsers(response))
            .then(console.log(users));
    }, [keyword]);

    const inputOnChange = (value) => {
        setKeyword(value);
        console.log(keyword);
    };
    return (
        <>
            <Nav>
                <TopSearchNav propFunc={inputOnChange} />
            </Nav>
            <Ul>
                {users.data &&
                    users.data.map((user) => (
                        <Li key={user._id}>
                            <UserSearch
                                userImg={user.image}
                                username={user.username}
                                accountname={user.accountname}
                            />
                        </Li>
                    ))}
            </Ul>
            <TabMenu img={'homeImg'} />
        </>
    );
}

export default Search;