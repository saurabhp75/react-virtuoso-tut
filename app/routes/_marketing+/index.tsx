import { type MetaFunction } from '@remix-run/node'
import { useRef, useState } from 'react'
import { TableVirtuoso, type VirtuosoHandle } from 'react-virtuoso'
import { Button } from '#app/components/ui/button.js'
import UserCard from '#app/components/UserCard.js'
import { createUsers } from './user'

export const meta: MetaFunction = () => [{ title: 'React virtuoso tutorial' }]

export default function Index() {
	const [users, setUsers] = useState(() => createUsers(0, 20))
	const [isLoading, setIsLoading] = useState(false)
	const virtuosoRef = useRef<VirtuosoHandle>(null)

	async function fetchNextPage() {
		const newUsers = createUsers(users.length, users.length + 20)

		setIsLoading(true)
		await new Promise((resolve) => setTimeout(resolve, 1000))
		setIsLoading(false)

		setUsers([...users, ...newUsers])
	}


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
			<TableVirtuoso
				ref={virtuosoRef}
				className="!h-[300px]"
				data={users}
				endReached={fetchNextPage}
				itemContent={(_, user) => <UserCard user={user} />}
				fixedFooterContent={
					isLoading
						? () => (
								<tr>
									<td className="bg-grayscale-700">Loading...</td>
								</tr>
							)
						: undefined
				}
				fixedHeaderContent={() => (
					<tr className="bg-background">
						<th className="bg-grayscale-700 w-[150px] text-left">Id</th>
						<th className="bg-grayscale-700 w-[150px] text-left">Name</th>
					</tr>
				)}
			/>
		</main>
	)
}
