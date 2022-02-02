import * as React from 'react';
import { connect } from "react-redux";
import Layout from '../../common/layout';
import withLoad from '../hocs/withLoad';
import UsersList from '../users-list';
import { getSortType, getLoadStatus, getSortedUsers, getUsers } from '../../reducer/selectors';

interface Props {
    sortedUsers: Array<object>,
};

const HomePage: React.FC<Props> = ({ sortedUsers }) => {
    return (
        <Layout>
            <UsersList users={sortedUsers} />
        </Layout>
    );
};

const mapStateToProps = (state) => ({
    sortedUsers: getSortedUsers(state),
    loadStatus: getLoadStatus(state),
    sortType: getSortType(state),
});

export default connect(mapStateToProps)(withLoad(HomePage));
