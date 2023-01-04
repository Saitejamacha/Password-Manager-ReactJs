import './index.css'

/* Sai Teja's Code */

const PasswordItem = props => {
  const {passwordDetails, isChecked, delPasswordItem} = props
  const {id, webSite, userName, password} = passwordDetails

  const passwordElement = isChecked ? (
    password
  ) : (
    <img
      className="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const onClickDeleteBtn = () => {
    delPasswordItem(id)
  }

  return (
    <li className="list-item">
      <div className="initial">
        <h1>{userName[0].toUpperCase()}</h1>
      </div>
      <div className="card-con">
        <p>{webSite}</p>
        <p>{userName}</p>
        <p>{passwordElement}</p>
      </div>
      <button onClick={onClickDeleteBtn} className="del-btn">
        <img
          alt="delete"
          className="del-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItem
