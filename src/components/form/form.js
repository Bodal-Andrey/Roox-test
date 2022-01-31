import React from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../../reducer/selectors';

class Form extends React.Component {
    removeDesabled() {
        document.querySelector('.form-user__elements').removeAttribute('disabled');
    };
    
    render() {
        const { user } = this.props;

        return (
            <section className='form'>
                <div className='form-title__wrapper'>
                    <h2 className='form-title'>Профиль пользователя</h2>
                    <button onClick={this.removeDesabled} className='form-title__button edit-button'>Редактировать</button>
                </div>
                <form className='form-user'>
                    <fieldset className='form-user__elements' disabled='disabled'>
                        <label className="form-user__label" htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" value={user.name} required />
                        <label className="form-user__label" htmlFor="user-name">User name</label>
                        <input id="user-name" name="user-name" type="text" placeholder={user.username} required />
                        <label className="form-user__label" htmlFor="email">Name</label>
                        <input id="email" name="email" type="email" placeholder={user.email} required />
                        <label className="form-user__label" htmlFor="street">Street</label>
                        <input id="street" name="street" type="text" placeholder={user.address.street} required />
                        <label className="form-user__label" htmlFor="city">City</label>
                        <input id="city" name="city" type="text" placeholder={user.address.city} required />
                        <label className="form-user__label" htmlFor="zipcode">Zip code</label>
                        <input id="zipcode" name="zipcode" type="number" placeholder={user.address.zipcode} required />
                        <label className="form-user__label" htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" type="tel" placeholder={user.phone} required />
                        <label className="form-user__label" htmlFor="web">Website</label>
                        <input id="web" name="web" type="text" placeholder={user.website} required />
                        <label className="ad-form__label" htmlFor="comment">Comment</label>
                        <textarea id="comment" name="comment" cols="30" rows="4"></textarea>
                    </fieldset>
                    <button className='form-button submit-button' type='submit'>Отправить</button>
                </form>
            </section>
        );
    }
};

const mapStateToProps = (state) => ({
    user: getUserDetails(state),
});

export default connect(mapStateToProps)(Form);
