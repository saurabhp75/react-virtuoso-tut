import { type MetaFunction } from '@remix-run/node'
import { useState } from 'react'
import { Virtuoso } from 'react-virtuoso'
import UserCard from '#app/components/UserCard.js'
import { createUsers } from './user'

export const meta: MetaFunction = () => [{ title: 'React virtuoso tutorial' }]

export default function Index() {
	const [users, setUsers] = useState(createUsers)
	return (
		// grid and flex classnames not working with Virtuoso
		<main>
			<Virtuoso
				className="!h-[300px]"
				data={users}
				itemContent={(_, user) => <UserCard user={user} />}
			/>
		</main>
	)
}
