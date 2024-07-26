import { Menu } from '@mui/material'
import React from 'react'

const FileMenu = ({ anchorE1 }) => {

    return (
        <Menu anchorEl={anchorE1} open={false} >
            <div
                style={{
                    width: "10rem"
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius ut aspernatur perferendis voluptas quo mollitia cupiditate eveniet odit sit vero, earum unde, soluta amet? Ullam reprehenderit omnis exercitationem non.
            </div>
        </Menu>
    )
}

export default FileMenu