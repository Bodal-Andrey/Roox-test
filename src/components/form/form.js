import React from 'react';

const Form = () => {
    return (
        <section className='form'>
            <div className='form-title__wrapper'>
                <h2 className='form-title'>Профиль пользователя</h2>
                <button className='form-title__button edit-button'>Редактировать</button>
            </div>
            <form className='form-user'>
                <fieldset className='form-user__elements'>
                    <label class="form-user__label" for="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Иван Иванов" required />
                    <label class="form-user__label" for="user-name">User name</label>
                    <input id="user-name" name="user-name" type="text" placeholder="Иван Иванов" required />
                    <label class="form-user__label" for="email">Name</label>
                    <input id="email" name="email" type="email" placeholder="example@mail.com" required />
                    <label class="form-user__label" for="street">Street</label>
                    <input id="street" name="street" type="text" placeholder="ул. Пример" required />
                    <label class="form-user__label" for="city">City</label>
                    <input id="city" name="city" type="text" placeholder="Москва" required />
                    <label class="form-user__label" for="zipcode">Zip code</label>
                    <input id="zipcode" name="zipcode" type="number" placeholder="1234567" required />
                    <label class="form-user__label" for="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="89991112233" required />
                    <label class="form-user__label" for="web">Website</label>
                    <input id="web" name="web" type="text" placeholder="www.example.com" required />
                    <label class="ad-form__label" for="comment">Comment</label>
                    <textarea id="comment" name="comment" cols="30" rows="4"></textarea>
                </fieldset>
                <button className='form-button submit-button' type='submit'>Отправить</button>
            </form>
        </section>
    );
};

export default Form;
