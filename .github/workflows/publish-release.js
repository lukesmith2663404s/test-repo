module.exports = async ({github, context, core}) => {
   
    const restapi = github.rest

    function firstOrDefault(items, predicate) {
        for (const item of items) {
            if (predicate(item)) {
                return item
            }
        }
        return null
    }

    function test() {
        console.log("test");
    }
    
    console.log("script")
}