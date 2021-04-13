import { Component } from "react"
import { sendContactMail } from "../networking/mail-api" 
//[1]

class Contact extends Component {
    state = {
        formButtonDisabled: false,
        formButtonText: "",
        formButtonStyle: "",
        name: "",
        mail: "",
        formContent: ""
    }

    render() {    
        const { formButtonText, formButtonStyle, formButtonDisabled, name, mail, formContent } = this.state
        
        const btnClass = formButtonDisabled ? "disabled" : "" 
//[2]

        return (
            <section id="contact">
            <div className="inner">
                <section>
                    <form method="post"  action="send" enctype = "multipart/form-data">
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" onChange={this.onNameChange} id="name"  />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" onChange={this.onMailChange} id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" onChange={this.onFormContentChange} rows="6"></textarea>
                        </div>
                        <span className = {formButtonStyle}>{formButtonText}</span>
                        <ul className="actions">
                            <li><button type="submit" value="submit" disabled={formButtonDisabled} onClick={this.submitContactForm} className="special" >Submit</button></li>
                            <li><input type="reset" value="Clear" /></li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="mailto:bt19cse127@iiitn.ac.in">bt19cse127@iiitn.ac.in</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span><a href="tel:+919052809307">(+91)-90528-09307</a></span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home"></span>
                            <h3>Address</h3>
                            <span>IIIT Nagpur Permanent Campus,<br />
                            Borkhedi, Maharashtra,<br />
                            India, 441108</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
        )
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
//[5]

    onMailChange = (event) => {
        this.setState({ mail: event.target.value })
    }

    onFormContentChange = (event) => {
        this.setState({ formContent: event.target.value })
    }

    submitContactForm = async (event) => {
        event.preventDefault()
//[6]

        const recipientMail = "amankr1619@gmail.com"
        const { name, mail, formContent } = this.state

        const res = await sendContactMail(recipientMail, name, mail, formContent)
        if (res.status < 300) {
            this.setState({
                formButtonDisabled: true,
                formButtonText: `Thank You ${name}, Your Message was sent successfully:)`,
                formButtonStyle: "green",
                name: "",
                mail: "",
                formContent: ""
            })

        } else {
            this.setState({ formButtonText: "Please fill out all the fields.", formButtonStyle: "danger",})
        }
//[7]
    }
}

export default Contact