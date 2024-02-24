export default function createDeepClone(object) {
    return JSON.parse(JSON.stringify(object))
}