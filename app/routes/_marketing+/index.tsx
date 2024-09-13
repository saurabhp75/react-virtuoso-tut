import { type MetaFunction } from '@remix-run/node'
import { useRef, useState } from 'react'
import { Virtuoso, type VirtuosoHandle } from 'react-virtuoso'
import { Button } from '#app/components/ui/button.js'
import UserCard from '#app/components/UserCard.js'
import { createUsers } from './user'

export const meta: MetaFunction = () => [{ title: 'React virtuoso tutorial' }]

export default function Index() {
	const [users, setUsers] = useState(createUsers)
	const virtuosoRef = useRef<VirtuosoHandle>(null)
	return (
		// grid and flex classnames not working with Virtuoso
		<main>
			<Button
				className="mb-4"
				onClick={() => {
					virtuosoRef.current?.scrollToIndex({
						index: Math.random() * users.length,
						align: 'start',
						behavior: 'smooth',
					})
				}}
			>
				Scroll
			</Button>
			<Virtuoso
				ref={virtuosoRef}
				className="!h-[300px]"
				data={users}
				itemContent={(_, user) => <UserCard user={user} />}
			/>
		</main>
	)
}
