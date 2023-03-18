import React from 'react'
import { List } from 'semantic-ui-react'

export const ToDo = ({todoTitle, todoStatus}) => {
  return (
    <List.Item>
        {todoStatus
          ? <List.Icon name='check square' color='green' size='large'/>
          : <List.Icon name='check square outline' size='large'/>}
        <List.Content>
            {todoTitle}
        </List.Content>
    </List.Item>
  )
}