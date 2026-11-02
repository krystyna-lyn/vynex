
const s = 1000
const m = s * 60
const h = m * 60
const d = h * 24
const w = d * 7
const y = d * 365.25

type Unit =
    | 'Years' | 'Year' | 'Yrs' | 'Yr' | 'Y'
    | 'Weeks' | 'Week' | 'Wks' | 'W'
    | 'Days' | 'Day' | 'D'
    | 'Hours' | 'Hour' | 'Hrs' | 'Hr' | 'H'
    | 'Minutes' | 'Minute' | 'Mins' | 'Min' | 'M'
    | 'Seconds' | 'Second' | 'Secs' | 'Sec' | 'S'
    | 'Milliseconds' | 'Millisecond' | 'Msecs' | 'Msec' | 'Ms'
    | 'Microseconds' | 'Microsecond' | 'Mcs' | 'Mc'

type UnitAnyCase = Unit | Lowercase<Unit> | Uppercase<Unit>

export type StringValue =
    `${number}`
    | `${number}${UnitAnyCase}`
    | `${number} ${UnitAnyCase}`

export function ms(str: StringValue): number {
    if (typeof str !== 'string' || str.length === 0 || str.length > 100) {
        throw new Error('Invalid input: must be a non-empty string with a maximum length of 100 characters.')
    }

    const match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|microseconds?|mcs?|s(ec(onds?)?)?|m(in(utes?)?)?|h(ours?)?|d(ays?)?|w(eeks?)?|y(ears?)?)?$/i.exec(str)

    if (!match) {
        return NaN
    }

    const n = parseFloat(match[1])
    const type = (match[2] || 'ms').toLowerCase()

    switch (type) {
        case 'years':
        case 'year':
        case 'y':
            return n * y

        case 'weeks':
        case 'week':
        case 'w':
            return n * w

        case 'days':
        case 'day':
        case 'd':
            return n * d

        case 'hours':
        case 'hour':
        case 'h':
            return n * h

        case 'minutes':
        case 'minute':
        case 'm':
            return n * m

        case 'seconds':
        case 'second':
        case 's':
            return n * s

        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n

        case 'microseconds':
        case 'microsecond':
        case 'mcs':
        case 'mc':
            return n / 1000

        default:
            return NaN
    }
}
