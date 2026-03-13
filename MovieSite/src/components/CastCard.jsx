export default function CastCard({actorName, characterName, actorImage}) {
    return(
        <div>
            <div style={{width: '200px', height: '250px', margin: '0 auto'}}>
                <img src={actorImage} style={{width: '100%', height: '100%', display: 'block', objectFit: 'cover'}}/>
            </div>
            <p>{actorName} playing as {characterName}.</p>
        </div>
    )
}