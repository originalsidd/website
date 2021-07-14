import React from 'react'
import {DLink} from './DownloadElements'

const DownloadButton  = (props) => {
	return (
		<DLink href={props.src} target="_blank" download>{props.children}</DLink>
	)
};

export default DownloadButton;