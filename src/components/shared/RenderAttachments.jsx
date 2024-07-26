import React from 'react'
import { transformImage } from '../../lib/features';
import { FileOpen as FileOpenIcon } from "@mui/icons-material"

const RenderAttachments = (file, url) => {
    switch (file) {
        case "video":
            return <video src={url} preload='none' width={"200px"} controls />

        case "image":
            return <img
                src={transformImage(url, 200)}
                width={"200"}
                height={"150"}
                style={{
                    objectFit: "contain"
                }}
                alt='Attachments'
            />

        case "audio":
            return <audio src={url} controls preload='none' autoPlay={false} />

        default:
            return <FileOpenIcon />

    }
}

export default RenderAttachments