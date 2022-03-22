import './Card.css';

const Card = ({badgeName, badgeDescription}) => {
    return(
        <div className="card">


<div className='avatar'></div>
            <h1 className="badgeName">{badgeName}</h1>
            <p className='badgeDescription'>{badgeDescription}</p>
            <button>Manage</button>

        </div>
    )
}

export default Card;