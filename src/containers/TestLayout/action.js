export function test(data) {
    console.log("dispatch test")
    return {
        type: 'TEST_KEY',
        payload: data,
    }
}