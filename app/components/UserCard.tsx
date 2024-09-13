import { type User } from '#app/routes/_marketing+/user.js'

export default function UserCard({ user }: { user: User }) {
	return (
		<>
			<td>{user.id}</td>
			<td>{user.name}</td>
		</>
	)
}
