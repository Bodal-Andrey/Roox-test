import React from 'react';
import { connect } from "react-redux";
import Layout from '../../common/layout';
import withLoad from '../hocs/withLoad';
import UsersList from '../users-list';
import { getSortType, getLoadStatus, getSortedUsers, getUsers } from '../../reducer/selectors';

const HomePage = ({ sortedUsers }) => {
    return (
        <Layout>
            <UsersList users={sortedUsers} />
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    users: getUsers(state),
    sortedUsers: getSortedUsers(state),
    loadStatus: getLoadStatus(state),
    sortType: getSortType(state),
});

export default connect(mapStateToProps)(withLoad(HomePage));
