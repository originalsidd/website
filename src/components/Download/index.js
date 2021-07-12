import React from 'react'
import {DLink} from './DownloadElements'

const DownloadButton  = (props) => {
	return (
		<DLink href={"_"+props.src} download>{props.children}</DLink>
	)
};

export default DownloadButton;