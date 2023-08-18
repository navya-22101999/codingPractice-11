// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: true,
  }

  changeCard = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-container">
        <div className="card-container">
          {isClicked ? (
            <div className="text-container">
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-container">
                {emojis.map(each => (
                  <li key={each.id}>
                    <button type="button" onClick={this.changeCard}>
                      <img src={each.imageUrl} alt={each.name} />
                      <p>{each.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ul>
              <li>
                <img src={loveEmojiUrl} alt="love emoji" />
                <div>
                  <h1>Thank you</h1>
                  <p>
                    We will use your feedback to improve our customer support
                    perfomance.
                  </p>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
