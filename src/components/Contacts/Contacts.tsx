import contacts from 'src/data/contacts'
import styles from './Contacts.module.scss'

const Contacts = () => {
	return (
		<div>
			<ul className={styles.list}>
				<li title='ru'>
					<a href='https://portfolio-ru-ten.vercel.app/'>Ru</a>
				</li>
				{contacts.map(contact => (
					<li title={contact.name} className={styles.item} key={contact.name}>
						<a href={contact.link} target='_blank'>
							<img
								className={styles.image}
								src={contact.image}
								alt={contact.name}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
export default Contacts
