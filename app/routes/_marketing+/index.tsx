import { type MetaFunction } from '@remix-run/node'
import { useState } from 'react'
import UserCard from '#app/components/UserCard.js'
import { createUsers } from './user'

export const meta: MetaFunction = () => [{ title: 'React virtuoso tutorial' }]

export default function Index() {
	const [users, setUsers] = useState(createUsers)
	return (
		<main className="font-poppins grid h-full place-items-center">
			{users.map((user) => (
				<UserCard key={user.id} user={user} />
			))}
		</main>
	)
}
