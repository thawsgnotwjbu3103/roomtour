import React from 'react';

const TopMenu = (props) => {
    const { banner_nm } = props.topMenu
    return (
        <li>
            {
                (banner_nm.startsWith('<') && banner_nm.endsWith('>')) ? 
                <a dangerouslySetInnerHTML={{__html: banner_nm}} href="#"></a> :
                <a href="#">{ banner_nm }</a>
            }
        </li>
    );
};

export default TopMenu;
