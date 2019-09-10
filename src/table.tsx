import * as React from 'react'
import { Table, Popover, Icon } from 'antd'
import { ColumnProps } from 'antd/lib/table'

import 'antd/dist/antd.css'
import './styles.css'

interface User {
	key: string
	name: string
	age: number
	address: string
}

class UserTable extends Table<User> {}

export default class TableExample extends React.Component<{}, {}> {
	handleOption = (text: string) => {
		console.log(text)
	}

	handleRowClick = (user: User) => {
		console.log('row click', user)
	}

	renderOptionColumn = () => {
		const content = (
			<ul className="list">
				<li onClick={() => this.handleOption('操作1')}>操作1</li>
				<li onClick={() => this.handleOption('操作2')}>操作2</li>
			</ul>
		)
		return (
			<div>
				<Popover placement="bottom" trigger="click" content={content}>
					<Icon type="ellipsis" />
				</Popover>
			</div>
		)
	}

	dataSource: User[] = [
		{
			key: '1',
			name: '胡彦斌',
			age: 32,
			address: '西湖区湖底公园1号',
		},
		{
			key: '2',
			name: '胡彦祖',
			age: 42,
			address: '西湖区湖底公园1号',
		},
	]

	columns: ColumnProps<User>[] = [
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: '住址',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '操作',
			key: 'option',
			render: this.renderOptionColumn,
		},
	]

	render() {
		return (
			<UserTable
				onRow={(user: User) => ({
					onClick: () => this.handleRowClick(user),
				})}
				dataSource={this.dataSource}
				columns={this.columns}
			/>
		)
	}
}
