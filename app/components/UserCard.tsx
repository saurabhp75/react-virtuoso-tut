import { type User } from '#app/routes/_marketing+/user.js'

export default function UserCard({ user }: { user: User }) {
	return (
		<>
			<div>{user.id}</div>
			<div>{user.name}</div>
		</>
	)
}
