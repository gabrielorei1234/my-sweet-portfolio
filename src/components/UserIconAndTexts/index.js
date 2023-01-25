export default function UserIconAndTexts({userTitle, userDescription, userPhoto}) {
    return (
        <div>
            <div className='circlePhoto'>
                <img className='userPhoto' src={userPhoto}></img>
            </div>
            <h1 className='userTitle'>{userTitle}</h1>
            <h2 className='userDescription'>
                {userDescription}
            </h2>
        </div>
    )
}