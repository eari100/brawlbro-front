'use client'

import axios from 'axios'
import {useEffect} from "react"

interface Params {
	id: string
}

export default function Page({ params }: { params: Params }) {
	const { id } = params

	const fetchBattleLog = async() => {
		const res = await axios.get(`/brawlstars/v1/players/${id}/battlelog`, {
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_BRAWL_API_KEY}`,
			},
		})

		return res.data;
	}

	useEffect(() => {
		fetchBattleLog().then(battleLob => console.log(battleLob))
	}, []);

	return <p>상세 페이지 입니다.</p>
}