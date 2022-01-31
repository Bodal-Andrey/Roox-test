import React from 'react';
import { connect } from "react-redux";
import Layout from '../../common/layout';
import withLoad from '../hocs/withLoad';
import Form from '../form/form';

const FormPage = () => {
    return (
        <Layout>
            <Form />
        </Layout>
    );
};

export default FormPage;
