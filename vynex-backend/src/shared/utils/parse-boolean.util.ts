export function parseBoolean(value: string): boolean {
    if (typeof value === 'boolean') {
        return value;
    }

    if (typeof value === 'string') {
        const lowerValue = value.trim().toLowerCase();
        if (lowerValue === 'true' || lowerValue === '1') {
            return true;
        } else if (lowerValue === 'false' || lowerValue === '0') {
            return false;
        }
    }

    throw new Error(`Invalid boolean value: ${value}`);

}