import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data) {
    return Math.round(data.reduce((total, val) => total + val) / data.length)
}

export default ({ data, color }) => (
    <div>
        <Sparklines height={120} width={180} data={data}>
            <SparklinesLine color={color} />
            <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(data)}</div>
    </div>
)
