import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

// Sai Teja's Code

class Passwords extends Component {
  state = {
    passwordsList: [],
    webSite: '',
    userName: '',
    passwordText: '',
    searchInput: '',
    isChecked: false,
  }

  delPasswordItem = id => {
    const {passwordsList} = this.state

    const filteredPasswordList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordsList: filteredPasswordList})
  }

  onWebSiteInput = event => {
    this.setState({webSite: event.target.value})
  }

  onUserNameInput = event => {
    this.setState({userName: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({passwordText: event.target.value})
  }

  onClickChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  AddPassword = event => {
    event.preventDefault()
    const {webSite, userName, passwordText, isChecked} = this.state

    const newPassword = {
      id: v4(),
      webSite,
      userName,
      password: passwordText,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      webSite: '',
      userName: '',
      passwordText: '',
    }))
  }

  renderNoPasswordsImg = () => (
    <div className="empty-pswd-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-img"
      />

      <p className="no-pswd-para">No Passwords</p>
    </div>
  )

  render() {
    const {
      webSite,
      userName,
      passwordText,
      isChecked,
      passwordsList,
      searchInput,
    } = this.state

    const onSearchMathchedList = passwordsList.filter(eachPswd =>
      eachPswd.webSite.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = onSearchMathchedList.length

    return (
      <div className="bg-con">
        <img
          alt="app logo"
          className="img-size"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        />
        <div className="all-con">
          <div className="top-con">
            <div className="top-sub-con">
              <form onSubmit={this.AddPassword} className="form-items">
                <h1 className="head">Add New Password</h1>
                <div className="input-img-con">
                  <img
                    alt="website"
                    className="web-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    placeholder="Enter Website"
                    value={webSite}
                    onChange={this.onWebSiteInput}
                    type="text"
                  />
                </div>
                <div className="input-img-con">
                  <img
                    alt="username"
                    className="web-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    placeholder="Enter Username"
                    value={userName}
                    onChange={this.onUserNameInput}
                    type="text"
                  />
                </div>
                <div className="input-img-con">
                  <img
                    alt="password"
                    className="web-logo"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                  <input
                    placeholder="Enter Password"
                    value={passwordText}
                    onChange={this.onPasswordInput}
                    type="password"
                  />
                </div>
                <button type="submit" className="add-Btn">
                  Add
                </button>
                {/* testid="delete" */}
              </form>

              <img
                alt="password manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                className="pass-image"
              />
              <div className="render-sm-img" />
            </div>
          </div>

          <div className="bottom-con">
            <div className="bottom-top-con">
              <div className="pass-count-con">
                <h1 className="bottom-head"> Your Passwords</h1>
                <p className="count-para">{count}</p>
              </div>
              <div className="input-img-con1">
                <img
                  alt="search"
                  className="web-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  className="input-search"
                  onChange={this.onSearchInput}
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <hr />
            <div className="show-password-con">
              <input
                id="Show-passwords"
                onClick={this.onClickChecked}
                className="check-box"
                type="checkbox"
              />
              <label htmlFor="Show-passwords" className="show-pass-text">
                Show passwords
              </label>
            </div>
            {count === 0 ? (
              this.renderNoPasswordsImg()
            ) : (
              <ul className="un-list-items">
                {onSearchMathchedList.map(eachPassword => (
                  <PasswordItem
                    key={eachPassword.id}
                    isChecked={isChecked}
                    passwordDetails={eachPassword}
                    delPasswordItem={this.delPasswordItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Passwords
