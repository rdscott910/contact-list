import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// add a new contact to the contact list

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: 0,
      name: '',
      image_URL: 'https://blogs.plos.org/opens/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
      email: '',
      phoneNumber: '',
      quote: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }
// generate a random id to uniquely identify contacts
  generateId = () => Math.round(Math.random() * 100000000);

/* after submit button is clicked, check to see if required fields have been filled,
  if not, display error message. Create new object based on current state and pass that
  object to the addContact func (in App.js). */
  handleSubmitContactClick () {
    if (this.state.name && this.state.email && this.state.phoneNumber){

    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_URL: this.state.image_URL,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      quote: this.state.quote
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/roladex')
  } else {
    alert('Fill in all required fields');
  }
}

/* create form for new contact, button to submit contact, link back to
  contact list. Component's state is updated based on user input.
*/
  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image URL</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_URL: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phoneNumber: event.target.value })
        }/>

        <br/>

        <label>Quote</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ quote: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/roladex'>Contact List</Link>
      </div>
    )
  }
}

// props passed in have to be of a certain type or error message is displayed 
ContactNew.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactNew
