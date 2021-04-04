import React from "react"
import Skeleton from "react-loading-skeleton"

import "./styles/PageLoading.css"
import { Loader } from './Loader';

function PageLoading() {
	return (
		<div className="PageLoading">
			<Loader></Loader>
		</div>
	)
}

export default PageLoading
