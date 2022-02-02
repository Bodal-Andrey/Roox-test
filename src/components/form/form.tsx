import * as React from 'react';
import { connect } from 'react-redux';
import { getUserDetails, getUserData } from '../../reducer/selectors';
import ActionCreator from '../../reducer/actions';
import { IUser } from '../../types';

interface Props {
    user: IUser,
    updateForm: (data: object) => void,
    userData: IUser,
};

class Form extends React.Component<Props, IUser> {
    state = {
        name: this.props.user.name,
        username: this.props.user.username,
        email: this.props.user.email,
        address: {
            street: this.props.user.address.street,
            city: this.props.user.address.city,
            zipcode: this.props.user.address.zipcode,
        },
        phone: this.props.user.phone,
        website: this.props.user.website,
    }

    nameRef: React.RefObject<HTMLInputElement> = React.createRef();
    usernameRef: React.RefObject<HTMLInputElement> = React.createRef();
    emailRef: React.RefObject<HTMLInputElement> = React.createRef();
    streetRef: React.RefObject<HTMLInputElement> = React.createRef();
    cityRef: React.RefObject<HTMLInputElement> = React.createRef();
    zipcodeRef: React.RefObject<HTMLInputElement> = React.createRef();
    phoneRef: React.RefObject<HTMLInputElement> = React.createRef();
    websiteRef: React.RefObject<HTMLInputElement> = React.createRef();

    removeDesabled() {
        document.querySelector('.form-user__elements').removeAttribute('disabled');
    };

    handleInputChange = () => {
        this.setState({
            name: this.nameRef.current.value,
            username: this.usernameRef.current.value,
            email: this.emailRef.current.value,
            address: {
                street: this.streetRef.current.value,
                city: this.cityRef.current.value,
                zipcode: this.zipcodeRef.current.value,
            },
            phone: this.phoneRef.current.value,
            website: this.websiteRef.current.value,
        });
    }

    handlePostForm = (evt: any) => {
        evt.preventDefault();
        const { updateForm } = this.props;
        updateForm(this.state);
    }

    render() {
        const { name, username, email, address, phone, website } = this.state;
        const { street, city, zipcode } = address;
        const { userData } = this.props;

        console.log(userData)

        return (
            <section className='form'>
                <div className='form-title__wrapper'>
                    <h2 className='form-title'>Профиль пользователя</h2>
                    <button onClick={this.removeDesabled} className='form-title__button edit-button'>Редактировать</button>
                </div>
                <form className='form-user'>
                    <fieldset className='form-user__elements' disabled={true}>
                        <label className="form-user__label" htmlFor="name">Name</label>
                        <input ref={this.nameRef} onChange={this.handleInputChange} id="name" name="name" type="text" defaultValue={name} required />
                        <label className="form-user__label" htmlFor="username">User name</label>
                        <input ref={this.usernameRef} onChange={this.handleInputChange} id="username" name="username" type="text" defaultValue={username} required />
                        <label className="form-user__label" htmlFor="email">Email</label>
                        <input ref={this.emailRef} onChange={this.handleInputChange} id="email" name="email" type="email" defaultValue={email} required />
                        <label className="form-user__label" htmlFor="street">Street</label>
                        <input ref={this.streetRef} onChange={this.handleInputChange} id="street" name="street" type="text" defaultValue={street} required />
                        <label className="form-user__label" htmlFor="city">City</label>
                        <input ref={this.cityRef} onChange={this.handleInputChange} id="city" name="city" type="text" defaultValue={city} required />
                        <label className="form-user__label" htmlFor="zipcode">Zip code</label>
                        <input ref={this.zipcodeRef} onChange={this.handleInputChange} id="zipcode" name="zipcode" type="text" defaultValue={zipcode} required />
                        <label className="form-user__label" htmlFor="phone">Phone</label>
                        <input ref={this.phoneRef} onChange={this.handleInputChange} id="phone" name="phone" type="tel" defaultValue={phone} required />
                        <label className="form-user__label" htmlFor="web">Website</label>
                        <input ref={this.websiteRef} onChange={this.handleInputChange} id="web" name="web" type="text" defaultValue={website} required />
                        <label className="ad-form__label" htmlFor="comment">Comment</label>
                        <textarea id="comment" name="comment" cols={30} rows={4}></textarea>
                    </fieldset>
                    <button onClick={this.handlePostForm} className='form-button submit-button' type='submit'>Отправить</button>
                </form>
            </section>
        );
    }
};

const mapStateToProps = (state) => ({
    user: getUserDetails(state),
    userData: getUserData(state),
});

const mapDispatchToProps = (dispatch) => ({
    updateForm: (data: object) => dispatch(ActionCreator.updateUserData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
