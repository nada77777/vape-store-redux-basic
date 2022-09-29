import React from 'react';
import { useState } from 'react';
import ContentItems from '../content_items/content_items';
import Navbar from '../navbar/navbar';

const MainContents = ({ InputBtn, items }) => {


    return(
        <div>
            <Navbar/>
            <ContentItems items={items} InputBtn={InputBtn} />
        </div>
    );
};

export default MainContents;