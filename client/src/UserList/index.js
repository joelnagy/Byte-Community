import React from 'react';
import './style.scss';

import { Link } from 'react-router-dom';

import { ConfigProvider, List } from 'antd';

import UserAvatar from '../UserAvatar';

const UserList = props => {
	const { users, onUserClick } = props;

	const onListItemClick = () => {
		if (onUserClick) {
			onUserClick();
		}
	};

	const ListEmptyState = () => (
		<div className="empty-state-container">
			<p>Nobody here....</p>
		</div>
	);

	return (
		<ConfigProvider renderEmpty={ListEmptyState}>
			<List
				className="user-list"
				dataSource={users}
				renderItem={item => {
					const { avatarURL, username, displayName } = item;

					return (
						<Link
							to={`/user/${username}`}
							onClick={onListItemClick}
							key={username}
						>
							<div className="user-info-container">
								<UserAvatar src={avatarURL} className="user-avatar" />
								<div className="user-name-container">
									<div className="user-name">{displayName}</div>
									<div className="user-username">{`@${username}`}</div>
								</div>
							</div>
						</Link>
					);
				}}
			></List>
		</ConfigProvider>
	);
};

export default UserList;
