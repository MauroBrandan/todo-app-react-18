import React from 'react'
import { List } from 'semantic-ui-react'

import { useToDos } from '../hooks/useToDos'

export const ToDo = ({ id, todoTitle, todoStatus }) => {
	const { checkToDo, deleteToDo } = useToDos()

	return (
		<List.Item>
			<List.Icon
				name={`check ${!todoStatus ? 'square outline' : 'square'}`}
				color='green'
				size='large'
				style={{ cursor: 'pointer' }}
				onClick={() => checkToDo(id)}
			/>
			<List.Content>{todoTitle}</List.Content>
			<List.Icon
				name='delete'
				color='red'
				size='small'
				style={{ cursor: 'pointer' }}
				onClick={() => deleteToDo(id)}
			/>
		</List.Item>
	)
}
