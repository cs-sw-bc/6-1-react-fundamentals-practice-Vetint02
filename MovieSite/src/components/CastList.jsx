import { casts } from '../../data/casts.js'
import CastCard from './CastCard.jsx'

export default function CastList() {
    return (
        <details>
            <summary>Casts</summary>
            <div style={{display: 'flex', justifyContent: 'center', gap: '50px'}}>
                <CastCard actorName={casts[0].name} characterName={casts[0].characterName} actorImage={casts[0].image} />
                <CastCard actorName={casts[1].name} characterName={casts[1].characterName} actorImage={casts[1].image} />
                <CastCard actorName={casts[2].name} characterName={casts[2].characterName} actorImage={casts[2].image} />
            </div>
        </details>
    )
}