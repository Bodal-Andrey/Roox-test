import React from 'react';
import { connect } from "react-redux";
import Layout from '../../common/layout';
import withLoad from '../hocs/withLoad';
import UsersList from '../users-list';
import { getUsers, getLoadStatus } from '../../reducer/selectors';

const HomePage = ({users}) => {
    return (
        <Layout>
            <UsersList users={users} />
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    users: getUsers(state),
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(withLoad(HomePage));
